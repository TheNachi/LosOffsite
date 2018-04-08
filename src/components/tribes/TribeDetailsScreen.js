/* eslint-disable global-require */
/* eslint-disable array-callback-return */
import React from 'react';
import Expo from 'expo';
import { View, ImageBackground, Text } from 'react-native';
import { Container, Content } from 'native-base';
import styles from './TribeStyles';
import { database } from '../../firebase';

/**
 * Tribe details screen component
 */
class TribeDetailsScreen extends React.Component {
  /**
   * Component constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      hasLoadedData: false,
      games: []
    };
  }

  /**
   * Called when component has mounted
   *
   * @returns {undefined}
   */
  componentDidMount() {
    const { tribeName } = this.props.navigation.state.params;
    database.ref('/leaderboard').on('value', (snapshot) => {
      const gameData = [];
      const response = snapshot.val();
      const games = Object.keys(response);
      games.map((game) => {
        Object.values(response[game]).forEach((tribe) => {
          if (tribe.tribeName === tribeName) {
            gameData.push({
              gameName: game,
              score: tribe.score,
              representatives: tribe.representatives
            });
          }
        });

        if (game === 'survivor') {
          const survivorGames = Object.keys(response.survivor);
          survivorGames.map((survivorGame) => {
            Object.values(response.survivor[survivorGame]).forEach((data) => {
              if (data.tribeName === tribeName) {
                gameData.push({
                  gameName: `Survivor(${this.capitalizeFirstLetter(survivorGame)})`,
                  score: data.score,
                  representatives: data.representatives
                });
              }
            });
          });
        }
      });
      this.setState({ games: gameData, hasLoadedData: true });
    });
  }

  /**
   * Capitalize first letter of word or sentence
   * @param {String} string
   *
   * @returns {String} formatted string
   */
  capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)

  /**
   * Component render method
   *
   * @returns {Node} jsx
   */
  render() {
    if (!this.state.hasLoadedData) {
      return <Expo.AppLoading />;
    }
    const { tribeName } = this.props.navigation.state.params;
    return (
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/App-backgroud.png')}
      >
        <Container>
          <Content padder>
            <View style={styles.main}>
              <Text style={styles.tribeName}>{tribeName.toUpperCase()}</Text>
              {this.state.games.map(game => (
                <View key={game.gameName} style={styles.gameView}>
                  <Text style={styles.gameName}>{this.capitalizeFirstLetter(game.gameName)}</Text>
                  <Text style={{ marginBottom: 10 }}>Score: {game.score}</Text>
                  <Text style={{ fontWeight: 'bold' }}>Representatives</Text>
                  <Text>{Object.values(game.representatives)}</Text>
                </View>
              ))}
            </View>
          </Content>
        </Container>
      </ImageBackground>
    );
  }
}

export default TribeDetailsScreen;

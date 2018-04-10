/* eslint-disable global-require */
/* eslint-disable array-callback-return */
import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { Container, Content, Spinner } from 'native-base';
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
      games: [],
      survivorGames: [],
      survivorGamesData: []
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
      const survivorGamesData = [];
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
                survivorGamesData.push({
                  gameName: survivorGame,
                  score: data.score,
                  representatives: data.representatives
                });
              }
            });
          });
        }
      });
      const survivorGames = Object.keys(response.survivor);
      const lastItem = survivorGames.pop();
      survivorGames.unshift(lastItem);
      this.setState({
        games: gameData,
        hasLoadedData: true,
        survivorGames,
        survivorGamesData
      });
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
   * Display survivor games
   *
   * @returns {Node} jsx
   */
  displaySurvivorGames = () => this.state.survivorGames.map((game) => {
    const { survivorGamesData } = this.state;
    const index = survivorGamesData.findIndex(survivor => survivor.gameName === game);
    if (index !== -1) {
      return (
          <View key={survivorGamesData[index].gameName} style={styles.gameView}>
          <Text style={styles.gameName}>
            {`Survivor(${this.capitalizeFirstLetter(survivorGamesData[index].gameName)})`}
          </Text>
          <Text style={{ marginBottom: 10 }}>Score: {survivorGamesData[index].score}</Text>
          <Text style={{ fontWeight: 'bold' }}>Representatives</Text>
          <Text>{Object.values(survivorGamesData[index].representatives)}</Text>
        </View>
      );
    }
    return (
        <View key={game} style={styles.gameView}>
          <Text style={styles.gameName}>{`Survivor(${this.capitalizeFirstLetter(game)})`}</Text>
          <Text>You either have not, or did not make it to this stage</Text>
        </View>
    );
  })

  /**
   * Component render method
   *
   * @returns {Node} jsx
   */
  render() {
    if (!this.state.hasLoadedData) {
      return (
        <Container>
          <Content>
            <Spinner color='#EF8E1F' />
          </Content>
        </Container>
      );
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
              {this.displaySurvivorGames()}
            </View>
          </Content>
        </Container>
      </ImageBackground>
    );
  }
}

export default TribeDetailsScreen;

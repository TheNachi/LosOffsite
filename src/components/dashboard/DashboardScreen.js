import React, { Component } from 'react';
import Expo from 'expo';
import { ImageBackground, Image, Text, AsyncStorage } from 'react-native';
import { Container, Content, View, Spinner } from 'native-base';
import { Table, Row } from 'react-native-table-component';
import styles from './DashboardStyles';
import { database } from '../../firebase';

/**
 * DashboardScreen component
 */
class DashboardScreen extends Component {
  /**
   * Component constructor
   */
  constructor() {
    super();
    this.state = {
      hasFontLoaded: false,
      hasLoadedData: false,
      games: [],
      tribeScore: 0
    };
  }

  /**
   * Called when component is mounting
   *
   * @returns {undefined}
   */
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({ hasFontLoaded: true });
    const { result } = this.props.navigation.state.params;
    await AsyncStorage.setItem('@authUser', JSON.stringify(result));
  }

  /**
   * Calculate score
   * @param {Array} gameData
   * @param {Object} tribe
   *
   * @returns {undefined}
   */
  calculateScore = (gameData, tribe) => {
    if (tribe.tribeName) {
      const index = gameData.findIndex(data => data.tribe === tribe.tribeName);
      if (index === -1) {
        gameData.push({
          tribe: tribe.tribeName,
          score: Number(tribe.score)
        });
      } else {
        gameData[index].score += Number(tribe.score);
      }
    }
  }

  /**
   * Called when component has mounted
   *
   * @returns {undefined}
   */
  componentDidMount() {
    database.ref('/leaderboard').on('value', (snapshot) => {
      const gameData = [];
      const response = snapshot.val();
      const games = Object.keys(response);
      games.map((game) => {
        Object.values(response[game]).forEach((tribe) => {
          this.calculateScore(gameData, tribe);
        });

        if (game === 'survivor') {
          const survivorGames = Object.keys(response.survivor);
          survivorGames.map((survivorGame) => {
            Object.values(response.survivor[survivorGame]).forEach((tribe) => {
              this.calculateScore(gameData, tribe);
            });
          });
        }
      });
      const { result } = this.props.navigation.state.params;
      const tribeScoreIndex = gameData.findIndex(tribe => tribe.tribe === result.tribeName);
      this.setState({
        games: gameData,
        hasLoadedData: true,
        tribeScore: gameData[tribeScoreIndex].score
      });
    });
  }

  /**
     * Component render method
     *
     * @returns {Node} jsx
     */
  render() {
    const { result } = this.props.navigation.state.params;
    if (!this.state.hasFontLoaded || !this.state.hasLoadedData) {
      return (
        <Container>
          <Content>
            <Spinner color='#EF8E1F' />
          </Content>
        </Container>
      );
    }
    return (
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/App-backgroud.png')}
      >
        <Container>
          <Content contentContainerStyle={styles.content}>
              <View style={styles.view}>
                <Image
                  borderRadius={50}
                  style={{ width: 100, height: 100 }}
                  source={{ uri: result.user.photoUrl }}
                />
                <View style={styles.userText}>
                  <Text style={styles.dynamicText}>{result.user.name}</Text>
                  <Text style={styles.text}>Of</Text>
                  <Text style={styles.dynamicText}>{result.tribeName}</Text>
                </View>
              </View>
              <View style={styles.view}>
                <View>
                  <Text style={styles.text}>Tribe Points: {this.state.tribeScore}</Text>
                </View>
              </View>
              <View style={styles.tableView}>
                <View>
                  <Text style={styles.tableHeaderText}>Overall Points</Text>
                  <Table borderStyle={{ borderColor: '#D3D3D3' }} style={{ flex: 1 }}>
                    <Row textStyle={styles.tableHeaderText} data={['Tribe', 'Points']} />
                    {this.state.games.map(tribe =>
                    <Row
                      textStyle={styles.rowText}
                      key={tribe.tribe}
                      data={[tribe.tribe, tribe.score]}
                    />)}
                  </Table>
                </View>
              </View>
          </Content>
        </Container>
      </ImageBackground>
    );
  }
}

export default DashboardScreen;

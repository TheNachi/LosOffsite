import React, { Component } from 'react';
import Expo from 'expo';
import { ImageBackground, Image, Text, AsyncStorage} from 'react-native';
import { Container, Content, View } from 'native-base';
import styles from './DashboardStyles';

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
      hasFontLoaded: false
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
     * Component render method
     *
     * @returns {Node} jsx
     */
  render() {
    const { result } = this.props.navigation.state.params;
    if (!this.state.hasFontLoaded) {
      return <Expo.AppLoading />;
    }
    return (
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/app-background.jpg')}
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
                  <Text style={styles.dynamicText}>Zamunda</Text>
                </View>
              </View>
              <View style={styles.view}>
                <View>
                  <Text style={styles.text}>Team Position:</Text>
                  <Text style={styles.text}>Games:</Text>
                </View>
              </View>
              <View style={styles.view}>
                <View>
                  <Text style={styles.text}>Overall Points:</Text>
                </View>
              </View>
          </Content>
        </Container>
      </ImageBackground>
    );
  }
}

export default DashboardScreen;

import React, { Component } from 'react';
import {
  View,
  Image,
  AsyncStorage
} from 'react-native';
import { Text } from 'native-base';
import styles from './SplashScreenStyles';

/**
 * Splash Screen component
 */
export default class SplashScene extends Component {
  /**
     * Called when component has mounted
     *
     * @returns {undefined}
     */
  componentDidMount() {
    const { navigate } = this.props.navigation;
    setTimeout(async () => {
      try {
        const stringResult = await AsyncStorage.getItem('LOGIN_RESULT');
        if (stringResult !== null) {
          const result = JSON.parse(stringResult);
          return navigate('Home', { result });
        }
      } catch (error) {
        // Error getting result
      }
      navigate('loginScreen');
    }, 4000);
  }

  /**
   * Component render method
   *
   * @returns {Node} jsx
   */
  render() {
    return (
      <View style={styles.wrapper}>
          <Image
              style={styles.logo}
              source={require('./assets/Andela-logo.png')}
              />
              <Image
              style={styles.huntLogo}
              source={require('./assets/The-hunt-logo.png')}
              />
          <Text style={styles.text}>
              2018 All Andela LOS
          </Text>
          <Text style={[styles.text]}>
              Offsite
          </Text>
          <Text style={[styles.text, styles.theme]}>
              Theme: The Andela Hunt
          </Text>
          <View style={styles.boxWrapper}>
              <View style={styles.box}>
              </View>
              <View style={styles.box}>
              </View>
              <View style={styles.box}>
              </View>
              <View style={styles.box}>
              </View>
              <View style={styles.box}>
              </View>
              <View style={styles.box}>
              </View>
              <View style={styles.box}>
              </View>
              <View style={styles.box}>
              </View>
              <View style={styles.box}>
              </View>
              <View style={styles.box}>
              </View>
          </View>
          <Text style={styles.text}>
              All tribes... Assemble!
          </Text>
      </View>
    );
  }
}


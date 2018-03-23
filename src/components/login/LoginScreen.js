import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import Config from 'react-native-config';
import { Container, Content, H1 } from 'native-base';
import styles from './LoginStyles';

/**
 * Login Screen Class Component
*/
class LoginScreen extends Component {
  /**
     * Method for logging in to google
     *
     * @returns {undefined}
     */
  login = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: Config.ANDROID_CLIENT_ID,
        iosClientId: Config.IOS_CLIENT_ID,
        scopes: ['profile', 'email']
      });

      if (result.type === 'success') {
        console.log(result);
        return result;
      }
      return { cancelled: true };
    } catch (e) {
      return { error: true };
    }
  }

  /**
     * Component render method
     *
     * @returns {Node} jsx
    */
  render() {
    return (
      <Container>
        <Content>
          <View style={styles.content}>
            <H1>The Andela Hunt</H1>
          </View>
        </Content>
      </Container>
    );
  }
}

export default LoginScreen;

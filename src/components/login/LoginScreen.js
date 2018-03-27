import React, { Component } from 'react';
import { View, TouchableHighlight, Image, Alert, AsyncStorage } from 'react-native';
import Expo from 'expo';
import { Container, Content, H1 } from 'native-base';
import styles from './LoginStyles';
import Config from '../../../config';

/**
 * Login Screen Class Component
*/
class LoginScreen extends Component {
  /**
     * Method for logging in with google
     *
     * @returns {Object} response
     */
  login = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: Config.ANDROID_CLIENT_ID,
        iosClientId: Config.IOS_CLIENT_ID,
        scopes: ['profile', 'email']
      });

      if (result.type === 'success') {
        const { email } = result.user;
        if (!email.includes('andela')) {
          return Alert.alert('Invalid Address', 'Please Provide An Andela Email Address');
        }
        try {
          await AsyncStorage.setItem('LOGIN_RESULT', JSON.stringify(result));
        } catch (error) {
          // Error saving result
        }
        const { navigate } = this.props.navigation;
        return navigate('Home', { result });
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
      <Container style={styles.container}>
        <Content>
          <View style={styles.content}>
           <Image
              style={styles.logo}
              source={require('../../assets/Andela-logo.png')}
            />
            <H1 style={styles.text}>The Andela Hunt</H1>
            <TouchableHighlight onPress={this.login}>
              <Image
                source={require('../../assets/button.png')}
              />
            </TouchableHighlight>
          </View>
        </Content>
      </Container>
    );
  }
}

export default LoginScreen;

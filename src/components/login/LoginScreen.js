import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Alert, AsyncStorage } from 'react-native';
import Expo from 'expo';
import { Container, Content, H1 } from 'native-base';
import styles from './LoginStyles';
import Config from '../../../config';
import { database } from '../../firebase';

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
        this.checkDatabase(email, result);
      }
      return { cancelled: true };
    } catch (e) {
      return { error: true };
    }
  }

  /**
   * Check database
   * @param {String} email
   * @param {Object} result
   *
   * @returns {undefined}
   */
  checkDatabase = async (email, result) => {
    let response;
    database.ref('/tribes').on('value', async (snapshot) => {
      response = snapshot.val();
      const emails = [];
      Object.values(response).forEach((tribe) => {
        Object.values(tribe).forEach((member) => {
          if (member.email) {
            emails.push({
              tribe: tribe.tribeName,
              email: member.email
            });
          }
        });
      });
      const index = emails.findIndex(element => element.email === email);
      if (index !== -1) {
        result.tribeName = emails[index].tribe;
        try {
          await AsyncStorage.setItem('LOGIN_RESULT', JSON.stringify(result));
        } catch (error) {
          // Error saving result
        }
        const { navigate } = this.props.navigation;
        navigate('Home', { result });
      } else {
        return Alert.alert('Invalid Address', 'Email Address Not Found');
      }
    });
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
            <TouchableOpacity onPress={this.login}>
              <Image
                source={require('../../assets/button.png')}
              />
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

export default LoginScreen;

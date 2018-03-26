import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import { Text } from 'native-base';
import { StackNavigator } from 'react-navigation';
import styles from './SplashScreenStyles';

export default class SplashScene extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('loginScreen');
    }, 4000);
  }

  render() {
    return (
      <View style={styles.wrapper}>
          <Image
              style={styles.logo}
              source={require('./assets/Andela-logo.png')}
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


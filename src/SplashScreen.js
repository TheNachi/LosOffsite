import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image
} from 'react-native';
import { Container, Text, Footer, FooterTab, Body } from 'native-base';
// import { StackNavigator } from 'react-navigation';

export default class SplashScene extends Component {
//   componentDidMount() {
//     setTimeout(() => {
//       this.props.navigation.navigate('signInScene');
//     }, 4000);
//   }

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

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#EF8E1F',
    flex: 1,
    width: undefined,
    height: undefined,
  },
  text: {
    paddingTop: 10,
    color: '#ffffff',
    fontSize: 30,
    textAlign: 'center',
  },
  theme: {
    fontSize: 16,
  },
  box: {
    height: 20,
    width: 20,
    margin: 10,
    display: 'flex',
    backgroundColor: '#8E4E04'
  },
  boxWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 190,
  },
  logo: {
    width: 200,
    height: 50,
}

});

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';


const LoginScreen = () => (
    <Text style={styles.text}>
            LOGIN PAGE
    </Text>
);

const styles = StyleSheet.create({
  text: {
    paddingTop: 10,
    color: '#000000',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50
  },
});

export default LoginScreen;

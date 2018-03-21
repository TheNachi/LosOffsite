// import React from 'react';
import { StackNavigator } from 'react-navigation';
import SplashScreen from './SplashScreen';

const IntroStack = StackNavigator({
  splashScreen: { screen: SplashScreen }
});

const PrimaryNavigation = StackNavigator({
  introStack: { screen: IntroStack },
}, {
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'introStack',
  // transitionConfig: noTransitionConfig
});

export default PrimaryNavigation;

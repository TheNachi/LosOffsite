import React from 'react';
import Expo from 'expo';
import { StackNavigator, TabNavigator, TabBarBottom, NavigationActions } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { Button, Icon } from 'native-base';
import SplashScreen from './SplashScreen';
import LoginScreen from './components/login/LoginScreen';
import EventScreen from './components/events/EventScreen';
import TribeScreen from './components/tribes/TribeScreen';
import DashboardScreen from './components/dashboard/DashboardScreen';
import TribeDetailsScreen from './components/tribes/TribeDetailsScreen';
import TribeMembersScreen from './components/tribes/TribeMembersScreen';

const tribeStack = StackNavigator({
  tribes: { screen: TribeScreen },
  tribeDetails: { screen: TribeDetailsScreen },
  tribeMembers: { screen: TribeMembersScreen },

}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: { backgroundColor: '#EF8E1F' },
    title: 'TRIBES!',
    headerTintColor: 'white',
    gesturesEnabled: false,
    headerBackTitle: null,
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: 'bold'
    }
  }
});

const tabStack = TabNavigator({
  Home: { screen: DashboardScreen },
  Events: { screen: EventScreen },
  Tribes: { screen: tribeStack },
}, {
  headerMode: 'float',
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = 'md-home';
      } else if (routeName === 'Events') {
        iconName = 'md-list';
      } else if (routeName === 'Tribes') {
        iconName = 'md-people';
      } else if (routeName === 'Map') {
        iconName = 'md-planet';
      }
      return <Ionicons name={iconName} size={30} color={tintColor} />;
    },
  }),
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#EF8E1F',
    inactiveTintColor: 'gray',
  },
  animationEnabled: false,
  swipeEnabled: false,
});

const introStack = StackNavigator({
  splashScreen: { screen: SplashScreen },
  loginScreen: { screen: LoginScreen },

}, {
  headerMode: 'float',
  navigationOptions: {
    header: null,
  }
});

const PrimaryNavigation = StackNavigator({
  introStack: { screen: introStack },
  mainStack: { screen: tabStack },
  tribeStack: { screen: tribeStack },
  logOutStack: { screen: LoginScreen }
}, {
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'introStack',
});

export default PrimaryNavigation;

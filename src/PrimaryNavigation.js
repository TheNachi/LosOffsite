import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import SplashScreen from './SplashScreen';
import LoginScreen from './components/login/LoginScreen';
import EventScreen from './components/events/EventScreen';
import TribeScreen from './components/tribes/TribeScreen';
import MapScreen from './components/map/MapScreen';
import DashboardScreen from './components/dashboard/DashboardScreen';


const tabStack = TabNavigator(
  {
    Home: { screen: DashboardScreen },
    Events: { screen: EventScreen },
    Tribes: { screen: TribeScreen },
    Map: { screen: MapScreen },
  },
  {
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
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);

const IntroStack = StackNavigator({
  splashScreen: { screen: SplashScreen },
  loginScreen: { screen: LoginScreen },

}, {
  headerMode: 'float',
  navigationOptions: {
    header: null,
  }
});

const PrimaryNavigation = StackNavigator({
  introStack: { screen: IntroStack },
  mainStack: { screen: tabStack }
}, {
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'introStack',
});

export default PrimaryNavigation;

import { StackNavigator } from 'react-navigation';
import SplashScreen from './SplashScreen';
import LoginScreen from './components/login/LoginScreen';
import DashboardScreen from './components/dashboard/DashboardScreen';

const IntroStack = StackNavigator({
  splashScreen: { screen: SplashScreen },
  loginScreen: { screen: LoginScreen },
  dashboardScreen: { screen: DashboardScreen }
}, {
  headerMode: 'float',
  navigationOptions: {
    header: null,
  }
});

const PrimaryNavigation = StackNavigator({
  introStack: { screen: IntroStack },
}, {
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'introStack',
});

export default PrimaryNavigation;

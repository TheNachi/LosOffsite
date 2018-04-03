import React from 'react';
import Expo from 'expo';
import PrimaryNavigation from './src/PrimaryNavigation';

/**
 * Main app component
 */
export default class App extends React.Component {
  /**
   * Get current screen
   * @param {Object} navigationState
   *
   * @returns {String} screen name
   */
  getCurrentRouteName = (navigationState) => {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];

    if (route.routes) {
      return this.getCurrentRouteName(route);
    }
    return route.routeName;
  }

  /**
   * Component render method
   *
   * @returns {Node} jsx
   */
  render() {
    return (
      <PrimaryNavigation
        onNavigationStateChange={(prevState, currentState) => {
          const currentScreen = this.getCurrentRouteName(currentState);
          if (currentScreen === 'Events') {
            Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
          } else {
            Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
          }
        }}
      />
    );
  }
}

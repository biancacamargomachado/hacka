/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Inicio from './src/screens/Inicio';
import Questoes from './src/screens/Questoes';
import RealizarTrajetoria from './src/screens/RealizarTrajetoria';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: Inicio},
    Questoes: {screen: Questoes},
    Realizando: {screen: RealizarTrajetoria},
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'transparent',
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;

import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Inicio from './src/screens/Inicio';
import Questoes from './src/screens/Questoes';
import RealizarTrajetoria from './src/screens/RealizarTrajetoria';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import TelaA from './src/screens/TelaA';
import TelaB from './src/screens/TelaA';
import Icon from 'react-native-vector-icons/FontAwesome';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Inicio,
      navigationOptions: ({navigation}) => ({
        tabBarVisible: false,
        barStyle: {height: 0},
        tabBarComponent: null,
      }),
    },
    Questoes: {screen: Questoes},
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

const mainNavigation = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: AppNavigator,
      navigationOptions: ({navigation}) => ({
        tabBarVisible: true,
        barStyle: {height: 0},
        tabBarComponent: null,
      }),
    },
    TelaA: {
      screen: TelaA,
      navigationOptions: () => ({
        labelStyle: {position: 'absolute', marginLeft: -50},
        tabBarIcon: ({focused}) => (
          <Icon name="lock" size={20} color={focused ? '#fff' : '#ddd'} />
        ),
      }),
    },
    TelaB: {
      screen: TelaB,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => (
          <Icon name="rocket" size={20} color={focused ? '#fff' : '#ddd'} />
        ),
      }),
    },
    Realizando: {
      screen: RealizarTrajetoria,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => (
          <Icon name="rocket" size={20} color={focused ? '#fff' : '#ddd'} />
        ),
        barStyle: {height: 'auto'},
      }),
    },
  },
  {
    barStyle: {
      backgroundColor: '#7159c1',
    },
  },
);

const AppContainer = createAppContainer(mainNavigation);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;

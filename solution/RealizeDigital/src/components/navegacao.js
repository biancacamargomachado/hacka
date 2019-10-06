import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import TelaA from '../screens/TelaA';
import TelaB from '../screens/TelaB';
import RealizarTrajetoria from '../screens/RealizarTrajetoria';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const mainNavigation = createMaterialBottomTabNavigator(
  {
    TelaA: {
      screen: TelaA,
      navigationOptions: () => ({
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
    RealizarTrajetoria: {
      screen: RealizarTrajetoria,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => (
          <Icon name="rocket" size={20} color={focused ? '#fff' : '#ddd'} />
        ),
      }),
    },
  },
  {
    barStyle: {
      backgroundColor: '#7159c1',
    },
  },
);

export default createAppContainer(mainNavigation);

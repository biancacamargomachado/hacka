import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import Button from '../components/button';

class Inicio extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerMode: 'none',
    headerVisible: false,
    tabBarVisible: false,
    title: null,
    header: null,
    headerLeft: null,
  };

  render() {
    const {navigate} = this.props.navigation;
    const {width, height} = Dimensions.get('window');
    return (
      <>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={{flex: 1, width: width, height: height}}>
            <Image
              resizeMode="cover"
              style={{
                margin: 0,
                position: 'absolute',
                width: width,
                height: height,
              }}
              source={require('../../assets/home.jpg')}
            />
            <View>
              <Button title="Começar" onPress={() => navigate('Questoes')} />
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Inicio;

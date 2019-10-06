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
          <View
            style={{
              flex: 1,
              width: width,
              height: height,
              opacity: 0.8,
              backgroundColor: '#000',
            }}>
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
            <View
              style={{
                maxWidth: '80%',
                justifyContent: 'space-between',
                alignSelf: 'center',
                marginTop: 30
              }}>
              <Text
                style={{
                  fontSize: 26,
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                  color: '#000',
                  textAlign: 'left',
                  lineHeight: 33,
                }}>
                Bem-vindo(a) ao Realize!
              </Text>
              <Text
                style={{
                  fontSize: 26,
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                  color: '#000',
                  textAlign: 'left',
                  lineHeight: 33,
                }}>
                Aqui você encontra benefícios e soluções pensadas para você.
              </Text>
            </View>
            <View style={{ marginTop: 300, marginRight: 15 }}>
              <Button title="Começar" onPress={() => navigate('Questoes')} />
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Inicio;

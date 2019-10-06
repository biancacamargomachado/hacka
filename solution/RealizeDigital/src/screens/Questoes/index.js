import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class Questoes extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerStyle: {backgroundColor: 'red'},
  };

  render() {
    const {navigate} = this.props.navigation;
    const {width, height} = Dimensions.get('window');
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View
              style={{
                backgroundColor: '#DCDCDC',
                flex: 1,
                width: width,
                height: height,
              }}>
              <Text>Tela de questões!</Text>
              <TouchableOpacity onPress={() => navigate('Realizando')}>
                <Text>Começar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default Questoes;

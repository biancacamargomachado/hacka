/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';

class Questoes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
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

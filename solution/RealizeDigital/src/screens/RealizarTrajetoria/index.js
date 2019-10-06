/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';

class RealizarTrajetoria extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
              <Text>Esta é a tela de trajetória!</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default RealizarTrajetoria;

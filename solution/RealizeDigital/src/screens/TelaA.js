import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';

class TelaA extends React.Component {
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
              <Text>TelaA!</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default TelaA;

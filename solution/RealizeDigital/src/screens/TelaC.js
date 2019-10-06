import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';

class TelaC extends React.Component {
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
              <Text>TelaC!</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default TelaC;

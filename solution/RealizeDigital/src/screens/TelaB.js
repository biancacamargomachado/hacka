import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';

class TelaB extends React.Component {
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
              <Text>TelaB!</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default TelaB;

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Button = ({onPress, title}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        backgroundColor: '#263030',
        alignSelf: 'flex-end',
        bottom: 0,
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        flexDirection: 'row',
      }}>
      <Text
        style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 20,
          marginRight: 10,
        }}>
        {title}
      </Text>
      <Icon name="ios-arrow-forward" size={30} color="#fff" />
    </TouchableOpacity>
  );
};

export default Button;

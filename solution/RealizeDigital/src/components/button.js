import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, title}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{backgroundColor: '#263030', alignSelf:'flex-end', bottom: 0}}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

import React from 'react';
import {styles} from './styles';
import { View, Text, TouchableOpacity } from 'react-native';

const Button2 = ({ onPress}) => {


  return (
    <View style={styles.container1}>
      <TouchableOpacity style={styles.loginButton} onPress={onPress}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};


export default React.memo(Button2);
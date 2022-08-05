//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Btn from '../components/Btn';
import Textinputevent from '../components/TextInput';
import {SignUPText} from '../helper/String';

// create a component
const Signup = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, color: 'black'}}>{SignUPText}</Text>
      <Textinputevent place={'Name'} />
      <Textinputevent place={'Email'} />
      <Textinputevent place={'phone'} />
      <Textinputevent place={'password'} />
      <Btn text={'Sign Up'} onpress={'feed'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Signup;

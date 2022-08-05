//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';

// create a component
const Feedpost = () => {
  return (
    <>
      <Header />
      <View style={styles.container}></View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default Feedpost;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import 'react-native-gesture-handler';
import React, { Component } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import {RootNavigator} from './route'
import {

  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,

} from 'react-native';



export default class  App extends Component {
  render(){
    const Nav = RootNavigator();
  return (

      <View style={styles.scrollView}>
        <Nav />
      </View>
      
      
  );
}

  }
  

const styles = StyleSheet.create({
  scrollView: {
   
    flex:1,
    backgroundColor: "#fff"
  },
 
});



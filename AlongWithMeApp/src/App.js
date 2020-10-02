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
import firebase from "@react-native-firebase/app";
import Auth from "@react-native-firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8aDxXuCMwppO6ne9IPSwxuGn-ikFUURE",
    authDomain: "alongwithme-22328.firebaseapp.com",
    databaseURL: "https://alongwithme-22328.firebaseio.com",
    projectId: "alongwithme-22328",
    storageBucket: "alongwithme-22328.appspot.com",
    messagingSenderId: "455176172872",
    appId: "1:455176172872:web:0f95df233b7f92e359ef7d",
    measurementId: "G-W2GYKM516W"
  };

  if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig); 
  }
  
export {firebase, Auth}

import {
  StyleSheet,
  View
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



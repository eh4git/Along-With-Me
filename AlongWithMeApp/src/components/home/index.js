
import React, { Component } from 'react';

import Faq from '../HomeModals/faq'

import {

  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Button,
  Modal,
  TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux';


class HomeComponent extends Component {

  render() {
    return (
    
      <View style={styles.centeredView3}>
        <Faq />
      <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Start Listening</Text>
        </TouchableHighlight>
      </View>
   
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: '35%',
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  centeredView1: {
    flex: 1,
    // justifyContent: "center",
    marginTop: 22
  },
  centeredView3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#A25B2C",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

function mapStateToProps(state) {
  console.log(state)
  return {
    News: state.News
  }
}

export default connect(mapStateToProps)(HomeComponent)
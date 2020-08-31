import React, { Component } from 'react';

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


export default class Contact extends Component {
 
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView1}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Contact Us</Text>

              <Text style={styles.modalText}>
                Hello! We're Third Project Development, a small four person team made up of web-developers. 
                (enter more about us here!)
              </Text>

              <Text style={styles.modalTitle}>
                    Check us out at:
              </Text>
              <Text style={styles.modalText}>
                    {/* Add link here */}
                    https://tiiedye.github.io/ThirdProjectDev/
              </Text>

              <Text style={styles.modalTitle}>
                    Email us at:
              </Text>
              <Text style={styles.modalText}>
                    {/* add a link here to open email */}
                    ThirdProjectDev@gmail.com
              </Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#A25B2C" }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Contact Us!</Text>
        </TouchableHighlight>
      </View>
     
  
    );
  }
}

const styles = StyleSheet.create({
  // centeredView: {
  //   flex: 1,
  //   width: '35%',
  //   // justifyContent: "center",
  //   alignItems: "center",
  //   // marginTop: 22
  // },
  centeredView1: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22
  },
  // centeredView3: {
  //   flex: 1,
  //   // justifyContent: "center",
  //   // alignItems: "center",
  //   // marginTop: 22
  // },
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
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold"
  }
});


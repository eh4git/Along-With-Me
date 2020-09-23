
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


export default class FaqComponent extends Component {
 
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View >
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
              <Text style={styles.modalText}>FAQ</Text> 
              <Text style={styles.questionStyle}>Q: bvidabfvsdfbvladfjfba;</Text>
              <Text>A: adjbfiavnpdfjnv{"\n"}</Text>
              <Text style={styles.questionStyle}>Q: bvidabfvsdfbvladfjfba;</Text>
              <Text>A: adjbfiavnpdfjnv{"\n"}</Text>
              <Text style={styles.questionStyle}>Q: bvidabfvsdfbvladfjfba;</Text>
              <Text>A: adjbfiavnpdfjnv{"\n"}</Text>
              <Text style={styles.questionStyle}>Q: bvidabfvsdfbvladfjfba;</Text>
              <Text>A: adjbfiavnpdfjnv{"\n"}</Text>


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
          <Text style={styles.textStyle}>FAQ</Text>
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
  // centeredView1: {
  //   flex: 1,
  //   // alignItems: "left",
  //   marginTop: 22
  // },
  // centeredView3: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 22
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
    elevation: 2,
    width: '100%',
    height: 40
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  questionStyle: {
    fontWeight: "bold"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center", 
    fontWeight: "bold",
    fontSize: 20,
  }
});


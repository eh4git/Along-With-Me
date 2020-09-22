
import React, { Component } from 'react';
import Works from "../HomeModals/works"
import Faq from '../HomeModals/faq'
import Contact from '../HomeModals/contact';
import { Picker } from "@react-native-community/picker"

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
  TouchableHighlight,
  ImageBackground
} from 'react-native';

import { connect } from 'react-redux';

import bookshelf from "../../assets/images/bookshelf.jpg"


class HomeComponent extends Component {
 
  state = {
    selectedStory: 'Princess'
  }

  render() {

    return (

      <View 
      // style={styles.bigView}
      >
        <ImageBackground source={bookshelf} style={styles.image} >

                <View
                  style={styles.centeredView}
                >
                  <Faq />
                  <Works />
                  <Contact />
                </View>

                <Text
                  style={styles.pickerTitle}
                >
                  Select Your Story:
                </Text>


              <View
                style={styles.pickerView}
              >
                <Picker
                    selectedValue={this.state.selectedStory}
                    style={{height: 50, width: 150}, styles.pickers}
                    onValueChange={itemValue =>
                    this.setState({selectedStory: itemValue})
                    
                  }>
                    <Picker.Item label="Little Princess" value="Princess" />
                    <Picker.Item label="Jungle Book" value="Jungle" />
                    <Picker.Item label="Jane Eyre" value="Jane" />
                </Picker>

                <TouchableHighlight
                    style={styles.openButton}
                    onPress={()=> this.props.navigation.navigate(this.state.selectedStory)}
                  >
                    <Text style={styles.textStyle}>Submit</Text>
                </TouchableHighlight>
              </View>

      {/* <TouchableHighlight
          style={styles.openButton}
          onPress={()=> this.props.navigation.navigate('Princess')}
        >
          <Text style={styles.textStyle}>A Little Princess</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.openButton}
          onPress={()=> this.props.navigation.navigate('Jungle')}
        >
          <Text style={styles.textStyle}>Jungle Book</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.openButton}
          onPress={()=> this.props.navigation.navigate('Jane')}
        >
          <Text style={styles.textStyle}>Jane Eyre</Text>
        </TouchableHighlight> */}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    position: "absolute",
    height: 560,
    flex: 1,
  },
  // bigView: {
  //   height: '200%'
  // },
  centeredView: {
    marginTop: 5,
    // flex: 1,
    flexDirection: "row",
    width: '100%',
    justifyContent: "space-evenly",
    marginBottom: 30
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
    elevation: 2,
    width: '35%',
    alignItems: "center"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
   
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  pickers: {
    width: "75%",
    backgroundColor: "white",
    marginBottom: 5,
    opacity: .75,
    justifyContent: "center",
    ...Platform.select({
      ios: {
        margin: 1,
      }
    })
  },
  pickerTitle: {
    marginTop: 50,
    marginBottom: 10,
    fontSize: 28,
    textAlign: "center",
    // color: "#A25B2C"
  },
  pickerView: {
    alignItems: "center"
  }
});

function mapStateToProps(state) {
  // console.log(state)
  return {
    Home: state.Home
  }
}

export default connect(mapStateToProps)(HomeComponent)

import React, { Component } from 'react';
import Slider from "@react-native-community/slider"
import { Picker } from "@react-native-community/picker"
import {rain1, fire1, fire2, fire3, rain2, rain3, forest1, forest2, forest3} from "../../utils/sounds"
import * as firebase from "firebase";
import Ionicons from 'react-native-vector-icons/Ionicons'
// import {Auth, firebase} from "../../App";


// var Sound = require("react-native-sound");
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
  Platform,
  PickerIOSComponent
} from 'react-native';
import { connect } from 'react-redux';
import { TouchableHighlight } from 'react-native-gesture-handler';

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


//volume control
rain1.setVolume(50);
fire1.setVolume(.01)
fire2.setVolume(1)
fire3.setVolume(.25)

class SettingsComponent extends Component {
  state = {
    rain: 'rain1', 
    forest: 'forest1',
    fire: 'fire1',
    rainSettings: [],
    setting: 'whynnno',
    fireSettings: [],
    forestSettings: [],
    volumeSettings: [], 
    sliderVol: .25
  }
  //plz work
  componentDidMount() {
    // console.warn(this.state.settings)
    firebase
      .database()
      .ref()
      .child("rain")
      .once("value", snapshot => {
        const data = snapshot.val()
        if (data) {
          const initSettings = []
          Object
            .keys(data)
            .forEach(setting => initSettings.push(data[setting]));
            this.setState({
              rainSettings: initSettings
            })
        }
      })
      firebase
      .database()
      .ref()
      .child("rain")
      .on("child_added", snapshot => {
        const data = snapshot.val()
        if (data) {
          this.setState(prevState => ({
            rainSettings: [data, ...prevState.rainSettings]
          }))
        }
      })
      firebase
      .database()
      .ref()
      .child("fire")
      .once("value", snapshot => {
        const data = snapshot.val()
        if (data) {
          const initSettings = []
          Object
            .keys(data)
            .forEach(setting => initSettings.push(data[setting]));
            this.setState({
              fireSettings: initSettings
            })
        }
      })
      firebase
      .database()
      .ref()
      .child("fire")
      .on("child_added", snapshot => {
        const data = snapshot.val()
        if (data) {
          this.setState(prevState => ({
            fireSettings: [data, ...prevState.fireSettings]
          }))
        }
      })
      firebase
      .database()
      .ref()
      .child("forest")
      .once("value", snapshot => {
        const data = snapshot.val()
        if (data) {
          const initSettings = []
          Object
            .keys(data)
            .forEach(setting => initSettings.push(data[setting]));
            this.setState({
              forestSettings: initSettings
            })
        }
      })
      firebase
      .database()
      .ref()
      .child("forest")
      .on("child_added", snapshot => {
        const data = snapshot.val()
        if (data) {
          this.setState(prevState => ({
            forestSettings: [data, ...prevState.forestSettings]
          }))
        }
      })
      firebase
      .database()
      .ref()
      .child("volume")
      .once("value", snapshot => {
        const data = snapshot.val()
        if (data) {
          const initSettings = []
          Object
            .keys(data)
            .forEach(setting => initSettings.push(data[setting]));
            this.setState({
              volumeSettings: initSettings
            })
        }
      })
      firebase
      .database()
      .ref()
      .child("volume")
      .on("child_added", snapshot => {
        const data = snapshot.val()
        if (data) {
          this.setState(prevState => ({
            volumeSettings: [data, ...prevState.volumeSettings]
          }))
        }
      })

  }

  saveSettings () {
    console.warn(this.state.setting)
    // if (!this.state.setting) return;

    const newSettings = firebase.database().ref().child("rain").push();
    newSettings.set(this.state.setting)
  }

  playRainSound()  {
      this.stopRainSound()
      this.switchSound(this.state.rain, rain1, rain2, rain3, "rain1", "rain2", "rain3");
  }

  playForestSound() {
    this.stopForestSound()
    this.switchSound(this.state.forest, forest1, forest2, forest3, "forest1", "forest2", "forest3");

  }
  playFireSound() {
    this.stopFireSound()
    this.switchSound(this.state.fire, fire1, fire2, fire3, "fire1", "fire2", "fire3");
    console.warn("button runs")
  }

  stopFireSound() {
    fire2.stop()
    fire1.stop()
    fire3.stop()
  }

  stopRainSound() {
    rain1.stop()
    rain2.stop()
    rain3.stop()
  }

  stopForestSound() {
    console.warn("is stop?")
    forest1.stop()
    forest2.stop()
    forest3.stop()
  }

  switchSound (soundState, sound1, sound2, sound3, value1, value2, value3) {
  
    switch(soundState) {
      case value1:
        sound1.play().setVolume(this.state.sliderVol);
        console.warn("this is 1")
        break;
      case value2:
        sound2.play().setVolume(this.state.sliderVol);
        console.warn("this is 2")
        break;
      case value3:
        sound3.play().setVolume(this.state.sliderVol);
        console.warn("this is 3")
        break;
      case "Random":
        let FireRandomInteger = Math.floor(Math.random() * 3) + 1
          switch (FireRandomInteger) {
            case 1: 
              sound1.play().setVolume(this.state.sliderVol);
              break;
            case 2: 
            sound2.play().setVolume(this.state.sliderVol);
              break;
            case 3: 
            sound3.play().setVolume(this.state.sliderVol);
              break;
            default: 
              break;
          }
      default:
        break;
    }
  }

  
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#F0F0F0' }}>
        <View>
            
            <Text h2>
              {/* Your Sounds */}
              {/* {this.state.rainSettings}
              {this.state.fireSettings}
              {this.state.forestSettings}
              {this.state.volumeSettings} */}
            </Text>
            <Text
            style={styles.soundSelection}>Rain&nbsp;
             {/* <TouchableHighlight
                    style={styles.logoutBtn}
                    onPress={()=> this.props.navigation.navigate("Auth")}
                  >
                    <Text style={styles.textStyle}>Log Out</Text>
                  </TouchableHighlight> */}
            <TouchableHighlight
                onPress={this.playRainSound.bind(this)}
                style={styles.playBtns}
                color="#A36F4C"
                size={15}
                accessibilityLabel="Button to play rain sound"
                >
                <Ionicons 
                name="volume-low-outline" 
                size={25} 
                color="white"
              />
                </TouchableHighlight>
                &nbsp;
                <TouchableHighlight
                style={styles.stopBtns}
                color="#7C2717"
                onPress={this.stopRainSound}
                title="stop"
                accessibilityLabel="Button to stop fire sound"
              >
                <Ionicons 
                name="volume-mute-outline" 
                size={25} 
                color="white"
              />
              </TouchableHighlight>
            </Text>
            
            <Picker
              selectedValue={this.state.rain}
              style={{height: 50, width: 150}, styles.pickers}
              onValueChange={(itemValue, itemIndex) =>
              this.setState({rain: itemValue})
              
            }>
              <Picker.Item label="Rain 1" value="rain1" />
              <Picker.Item label="Rain 2" value="rain2" />
              <Picker.Item label="Rain 3" value="rain3" />
              <Picker.Item label="Randomize" value="Random" />
            </Picker>
            <Text
            style={styles.soundSelection}>Forest&nbsp;
            <TouchableHighlight
                onPress={this.playForestSound.bind(this)}
                style={styles.playBtns}
                color="#A36F4C"
                size={15}
                accessibilityLabel="Button to play forest sound"
                >
                <Ionicons 
                name="volume-low-outline" 
                size={25} 
                color="white"
              />
                </TouchableHighlight>
                &nbsp;
                <TouchableHighlight
                style={styles.stopBtns}
                color="#7C2717"
                onPress={this.stopForestSound}
                title="stop"
                accessibilityLabel="Button to stop forest sound"
              >
                <Ionicons 
                name="volume-mute-outline" 
                size={25} 
                color="white"
              />
              </TouchableHighlight>
            
            </Text>
            <Picker
              selectedValue={this.state.forest}
              style={{height: 50, width: 150}, styles.pickers}
              onValueChange={(itemValue, itemIndex) =>
              this.setState({forest: itemValue})
            }>
              <Picker.Item label="Forest 1" value="forest1" />
              <Picker.Item label="Forest 2" value="forest2" />
              <Picker.Item label="Forest 3" value="forest3" />
              <Picker.Item label="Randomize" value="Random" />
            </Picker>
            <Text
            style={styles.soundSelection}>Fire&nbsp;
              <TouchableHighlight
                onPress={this.playFireSound.bind(this)}
                style={styles.playBtns}
                color="#A36F4C"
                size={15}
                accessibilityLabel="Button to play fire sound"
                >
                <Ionicons 
                name="volume-low-outline" 
                size={25} 
                color="white"
              />
                </TouchableHighlight>
                &nbsp;
                <TouchableHighlight
                style={styles.stopBtns}
                color="#7C2717"
                onPress={this.stopFireSound}
                title="stop"
                accessibilityLabel="Button to stop fire sound"
              >
                <Ionicons 
                name="volume-mute-outline" 
                size={25} 
                color="white"
              />
              </TouchableHighlight>
            </Text>
            <Picker
              selectedValue={this.state.fire}
              style={{height: 50, width: 150}, styles.pickers}
              onValueChange={(itemValue, itemIndex) =>
              this.setState({fire: itemValue, setting: itemValue})}
              >
              <Picker.Item label="Fire 1" value="fire1" />
              <Picker.Item label="Fire 2" value="fire2" />
              <Picker.Item label="Fire 3" value="fire3" />
              <Picker.Item label="Randomize" value="Random" />
            </Picker>
            <Text h2>
              Volume
            </Text>
            <Slider
              style={{width: 200, height: 40}}
              maximumValue={1}
              minimumValue={0}
              step={.25}
              value={.5}
              onValueChange={ itemValue =>
                this.setState({sliderVol: itemValue})}
            />

<TouchableHighlight
                style={styles.saveBtn}
                color="#7C2717"
                onPress={this.saveSettings.bind(this)}
                title="stop"
                accessibilityLabel="Button to stop fire sound"
              >
                <Text h2>
              Save Settings
            </Text>
             
              </TouchableHighlight>
            
        {/* <Text>
          Sound Credit to Zapsplat
        </Text> */}

        
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  pickers: {
  ...Platform.select({
    ios: {
      margin: 1,
    }
  })
  },
  playBtns: {
    backgroundColor: "#A36F4C",
    color: "pink",
    width: '50%',
  },
  stopBtns: {
    backgroundColor: "#7C2717",
    color: "pink",
    width: '50%',
  },
  saveBtn: {
    backgroundColor: "#A25B2C",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginLeft: '30%',
    marginTop: 30,
    width: 110,
  },
  soundSelection: {
    fontSize: 40,

  }
});
function mapStateToProps(state) {
  // console.log(state)
  return {
    News: state.News
  }
}
export default connect(mapStateToProps)(SettingsComponent)
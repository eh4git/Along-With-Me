
import React, { Component } from 'react';
import Slider from "@react-native-community/slider"
import { Picker } from "@react-native-community/picker"
import {rain1, fire1, fire2, fire3} from "../../utils/sounds"
import * as firebase from "firebase";


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
  Platform
} from 'react-native';
import { connect } from 'react-redux';

const config = {
  apiKey: "AIzaSyC8aDxXuCMwppO6ne9IPSwxuGn-ikFUURE",
  authDomain: "alongwithme-22328.firebaseapp.com",
  databaseURL: "https://alongwithme-22328.firebaseio.com",
  projectId: "alongwithme-22328",
  storageBucket: "alongwithme-22328.appspot.com",
  messagingSenderId: "455176172872",
  appId: "1:455176172872:web:0f95df233b7f92e359ef7d",
  measurementId: "G-W2GYKM516W"
}; 
firebase.initializeApp(config);

//volume control
rain1.setVolume(50);
fire1.setVolume(.01)
fire2.setVolume(1)
fire3.setVolume(.25)

class SettingsComponent extends Component {
  state = {
    rain: 'pick your choice', 
    forest: 'pick your choice',
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
      rain1.play()
      console.warn("hi")
  }

  playFireSound() {
    // this.switchSound(this.state.fire, "fire1", "fire2", "fire3");
    switch(this.state.fire) {
      case "fire1":
        fire1.play().setVolume(this.state.sliderVol);
        break;
      case "fire2":
        fire2.play().setVolume(this.state.sliderVol);
        break;
      case "fire3":
        fire3.play().setVolume(this.state.sliderVol);
        console.warn("this is 3")
        break;
      case "Random":
        let FireRandomInteger = Math.floor(Math.random() * 3) + 1
          switch (FireRandomInteger) {
            case 1: 
              fire1.play().setVolume(this.state.sliderVol);
              break;
            case 2: 
              fire2.play().setVolume(this.state.sliderVol);
              break;
            case 3: 
              fire3.play().setVolume(this.state.sliderVol);
              console.warn("this is 3")
              break;
            default: 
              break;
          }
    }
    console.warn("button runs")
  }

  stopFireSound() {
    fire2.stop()

    fire1.stop()

    fire3.stop()
  }

  stopRainSound() {
    
    rain1.stop()


  }

  switchSound (soundState, case1, case2, case3) {
    console.warn("working in function")
    console.warn(soundState);
    console.warn(case1)
   
    switch(soundState) {
      case case1:
        case1.play().setVolume(this.state.sliderVol);
        console.warn("this is 1")
        break;
      case case2:
        case2.play().setVolume(this.state.sliderVol);
        console.warn("this is 2")
        break;
      case caseString3:
        case3.play().setVolume(this.state.sliderVol);
        console.warn("this is 3")
        break;
      case "Random":
        let FireRandomInteger = Math.floor(Math.random() * 3) + 1
          switch (FireRandomInteger) {
            case 1: 
              case1.play().setVolume(this.state.sliderVol);
              break;
            case 2: 
              case2.play().setVolume(this.state.sliderVol);
              break;
            case 3: 
              case3.play().setVolume(this.state.sliderVol);
              break;
            default: 
              break;
          }
      default:
        break;
    }
  }

  // switchRandom (randomInteger) {
  //   switch (randomInteger) 
  // }
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#F0F0F0' }}>
        <View>
            <Text h1>
             Settings - Your settings will not save if you are not logged in!
            </Text>
            <Text h2>
              {/* Your Sounds */}
              {this.state.rainSettings}
              {this.state.fireSettings}
              {this.state.forestSettings}
              {this.state.volumeSettings}
            </Text>
            <Text>Rain
              <Button
                onPress={this.playRainSound}
                title= ":sound:"
                accessibilityLabel="Button to play rain sound"
                />
                <Button
                onPress={this.stopRainSound}
                title=":stopsound:"
                accessibilityLabel="Button to stop fire sound"
              />
            </Text>
            <Picker
              selectedValue={this.state.rain}
              style={{height: 50, width: 150}, styles.pickers}
              onValueChange={(itemValue, itemIndex) =>
              this.setState({rain: itemValue})
              
            }>
              <Picker.Item label="Rain 1" value="Rain1" />
              <Picker.Item label="Rain 2" value="Rain2" />
              <Picker.Item label="Rain 3" value="Rain3" />
              <Picker.Item label="Randomize" value="RainRandom" />
            </Picker>
            <Text>Forest
              {/* <Button
                onPress={this.playFireSound}
                title=":sound:"
                accessibilityLabel="Button to play fire sound"
              /> */}
            </Text>
            <Picker
              selectedValue={this.state.forest}
              style={{height: 50, width: 150}, styles.pickers}
              onValueChange={(itemValue, itemIndex) =>
              this.setState({forest: itemValue})
            }>
              <Picker.Item label="Forest 1" value="Forest1" />
              <Picker.Item label="Forest 2" value="Forest2" />
              <Picker.Item label="Forest 3" value="Forest3" />
              <Picker.Item label="Randomize" value="ForestRandom" />
            </Picker>
            <Text>Fire
              <Button
                onPress={this.playFireSound.bind(this)}
                title=":sound:"
                accessibilityLabel="Button to play fire sound"
              />
              <Button
                onPress={this.stopFireSound}
                title=":stopsound:"
                accessibilityLabel="Button to stop fire sound"
              />
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
            <Button
                onPress={this.saveSettings.bind(this)}
                title="Save Settings"
                accessibilityLabel="Button to save your settings"
              />
        <Text>
          Sound Credit to Zapsplat
        </Text>

        
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
  }
});
function mapStateToProps(state) {
  // console.log(state)
  return {
    News: state.News
  }
}
export default connect(mapStateToProps)(SettingsComponent)
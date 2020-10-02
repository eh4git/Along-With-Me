
import React, { Component } from 'react';
import Slider from "@react-native-community/slider"
import { Picker } from "@react-native-community/picker"
import {rain1, fire1, fire2, fire3, rain2, rain3, forest1, forest2, forest3} from "../../utils/sounds"
// import * as firebase from "firebase";
import {Auth, firebase} from "../../App";


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
                onPress={this.playRainSound.bind(this)}
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
              <Picker.Item label="Rain 1" value="rain1" />
              <Picker.Item label="Rain 2" value="rain2" />
              <Picker.Item label="Rain 3" value="rain3" />
              <Picker.Item label="Randomize" value="Random" />
            </Picker>
            <Text>Forest
            <Button
                onPress={this.playForestSound.bind(this)}
                title= ":sound:"
                accessibilityLabel="Button to play forest sound"
                />
                <Button
                onPress={this.stopForestSound}
                title=":stopsound:"
                accessibilityLabel="Button to stop forest sound"
              />
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
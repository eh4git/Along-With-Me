
import React, { Component } from 'react';
import Slider from "@react-native-community/slider"
import { Picker } from "@react-native-community/picker"
import Ionicons from 'react-native-vector-icons/Ionicons'
import RainSound1 from "../../assets/rain_choiceone.mp3"
import FireSound1 from "../../assets/fire_one.mp3"
import FireSound2 from "../../assets/fire_two.mp3"
import FireSound3 from "../../assets/fire_three.mp3"


var Sound = require("react-native-sound");
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
const sounds = [
  {
    title:"mp3 in bundle",
    url: RainSound1,
    basePath: Sound.MAIN_BUNDLE
  },
  {
    title:"mp3 for fire1",
    url: FireSound1,
    basePath: Sound.MAIN_BUNDLE
  },
  {
    title:"mp3 for fire2",
    url: FireSound2,
    basePath: Sound.MAIN_BUNDLE
  },
  {
    title:"mp3 for fire2",
    url: FireSound3,
    basePath: Sound.MAIN_BUNDLE
  },
]

// Auto linked react-native-sound, made sure path to sound file was correct, changed file name to path + name, Currently using walking through bushes sound, added volume control
var rain1 = new Sound(RainSound1, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.warn("failed to load the sound", error);
    return;
  }
  console.warn("it loaded")
  rain1.play((success) => {
    if (success) {
      console.warn("success")
    }
    else {
      console.warn("it fail")
    }
  })
})

var fire1 = new Sound(FireSound1, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.warn("failed to load the sound", error);
    return;
  }
  console.warn("it loaded")
  fire1.play((success) => {
    if (success) {
      console.warn("success")
    }
    else {
      console.warn("it fail")
    }
  })
})

var fire2 = new Sound(FireSound2, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.warn("failed to load the sound", error);
    return;
  }
  console.warn("it loaded")
  fire2.play((success) => {
    if (success) {
      console.warn("success")
    }
    else {
      console.warn("it fail")
    }
  })
})

var fire3 = new Sound(FireSound3, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.warn("failed to load the sound", error);
    return;
  }
  console.warn("it loaded")
  fire2.play((success) => {
    if (success) {
      console.warn("success")
    }
    else {
      console.warn("it fail")
    }
  })
})
//volume control
rain1.setVolume(50);
fire1.setVolume(100)
fire2.setVolume(50)
fire3.setVolume(100)

class SettingsComponent extends Component {
  state = {
    rain: 'pick your choice',
    forest: 'pick your choice',
    fire: 'Fire1'
  }
  componentDidMount() {
    console.warn(this.state.fire)
    // this.props.dispatch(getNews());
  }
  playRainSound()  {
      rain1.play()
      console.warn("hi")
  }

  playFireSound() {
    console.warn(this.state.fire)

    // console.warn(this.state.fire)
    switch(this.state.fire) {
      case "Fire1":
        fire1.play();
        console.warn("this is 1")
        break;
      case "Fire2":
        fire2.play();
        console.warn("this is 2")
        break;
      case "Fire3":
        fire3.play();
        console.warn("this is 3")
        break;
      case "FireRandom":
        let FireRandomInteger = Math.floor(Math.random() * 3) + 1
          switch (FireRandomInteger) {
            case 1: 
              fire1.play();
              console.warn("this is 1")
              break;
            case 2: 
              fire2.play();
              console.warn("this is 2")
              break;
            case 3: 
              fire3.play();
              console.warn("this is 3")
              break;
            default: 
              break;
          }
    }
    // fire2.play()
    // console.warn("button runs")
  }

  stopFireSound() {
    fire2.stop()
    console.warn("stopping1")

    fire1.stop()
    console.warn("stopping2")

    fire3.stop()
    console.warn("stopping3")
  }

  // switchSound (state, case1, case2, case3, caseRandom) {
  //   switch(this.state.fire) {
  //     case "Fire1":
  //       fire1.play();
  //       console.warn("this is 1")
  //       break;
  //     case "Fire2":
  //       fire2.play();
  //       console.warn("this is 2")
  //       break;
  //     case "Fire3":
  //       fire3.play();
  //       console.warn("this is 3")
  //       break;
  //     case "FireRandom":
  //       let FireRandomInteger = Math.floor(Math.random() * 3) + 1
  //       this.switchSound(state, case1, case2, case3, FireRandomInteger)
  //       break;
  //     default:
  //       break;
  //   }
  // }

  // switchRandom (randomInteger) {
  //   switch (randomInteger) 
  // }
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#F0F0F0' }}>
        <View>
            <Text h1>
             Settings
            </Text>
            <Text h2>
              Your Sounds
            </Text>
            <Text>Rain
              <Button
                onPress={this.playRainSound}
                title= ":sound:"
                accessibilityLabel="Button to play rain sound"
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
              this.setState({fire: itemValue})
            }>
              <Picker.Item label="Fire 1" value="Fire1" />
              <Picker.Item label="Fire 2" value="Fire2" />
              <Picker.Item label="Fire 3" value="Fire3" />
              <Picker.Item label="Randomize" value="FireRandom" />
            </Picker>
            <Text h2>
              Volume
            </Text>
            <Slider
              style={{width: 200, height: 40}}
              maximumValue={100}
              minimumValue={0}
              step={1}
              value={50}
            />
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
  console.log(state)
  return {
    News: state.News
  }
}
export default connect(mapStateToProps)(SettingsComponent)
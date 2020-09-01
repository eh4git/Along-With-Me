
import React, { Component } from 'react';
import Slider from "@react-native-community/slider"
import { Picker } from "@react-native-community/picker"
import Ionicons from 'react-native-vector-icons/Ionicons'
import RainSound1 from "../../assets/rain_choiceone.mp3"
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
  }
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
//volume control
rain1.setVolume(1);
//blah melk
class SettingsComponent extends Component {
  state = {
    rain: 'pick your choice',
    forest: 'pick your choice',
    fireplace: 'pick your choice'
  }
  componentDidMount() {
    // this.props.dispatch(getNews());
  }
  playRainSound()  {
      rain1.play()
      console.warn("hi")
  }
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
            <Text>Forest</Text>
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
            <Text>Fireplace</Text>
            <Picker
              selectedValue={this.state.fireplace}
              style={{height: 50, width: 150}, styles.pickers}
              onValueChange={(itemValue, itemIndex) =>
              this.setState({fireplace: itemValue})
            }>
              <Picker.Item label="Fireplace 1" value="Fireplace1" />
              <Picker.Item label="Fireplace 2" value="Fireplace2" />
              <Picker.Item label="Fireplace 3" value="Fireplace3" />
              <Picker.Item label="Randomize" value="FireplaceRandom" />
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
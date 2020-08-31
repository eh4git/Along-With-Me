
import React, { Component } from 'react';
import Slider from "@react-native-community/slider"
import { Picker } from "@react-native-community/picker"

import {

  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';




class SettingsComponent extends Component {

  state = {
    rain: 'pick your choice',
    forest: 'pick your choice',
    fireplace: 'pick your choice'

  }
  componentDidMount() {
    // this.props.dispatch(getNews());
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

            <Text>Rain</Text>

            <Picker
              selectedValue={this.state.rain}
              style={{height: 50, width: 150}}
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
              style={{height: 50, width: 150}}
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
              style={{height: 50, width: 150}}
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
 
});

function mapStateToProps(state) {
  console.log(state)
  return {
    News: state.News
  }
}

export default connect(mapStateToProps)(SettingsComponent)
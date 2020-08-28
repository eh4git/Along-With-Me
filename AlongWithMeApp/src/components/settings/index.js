
import React, { Component } from 'react';

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

  componentDidMount() {
    // this.props.dispatch(getNews());
  }

 
  render() {
    
    return (
      <ScrollView style={{ backgroundColor: '#F0F0F0' }}>
        <View>
            <Text>this is the Settings screen</Text>
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
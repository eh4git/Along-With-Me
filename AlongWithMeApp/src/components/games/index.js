
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
import { getGames } from '../../store/actions/games_actions'
import Moment from 'moment';

class  GamesComponent extends Component {

  componentDidMount() {
    this.props.dispatch(getGames());
  }

  showGames = (list) => (
    list.games ?
      list.games.map((item, i) => (
        <TouchableOpacity
          key={i}
          onPress={()=> this.props.navigation.navigate('Article',{
            ...item
          })}
        >
          <View style={styles.gameContainer}>

              <View style={styles.gameBox}>
                <Image 
                  source={{uri: `https://buyandsellhuntingdogs.com/wp-content/uploads/2019/03/Lab-Puppy.jpg`}}
                  style={{height: 80, width:80}}
                  resizeMode="contain"
                />
                  <Text style={styles.teamRecord}>
                    {item.awayData.wins} - {item.awayData.loss}
                  </Text>
              </View>
              
              <View style={styles.gameBox}>
                <Text style={styles.gameTime}>
                  {item.time}
                </Text>
                <Text>
                  {Moment(item.date).format('d MMMM')}
                </Text>
              </View>

              <View style={styles.gameBox}>
                <Image 
                  source={{uri: `https://i.pinimg.com/originals/45/a4/e1/45a4e1a9dcddbd936c5586419842e397.jpg`}}
                  style={{height: 80, width:80}}
                  resizeMode="contain"
                />
                  <Text style={styles.teamRecord}>
                    {item.localData.wins} - {item.localData.loss}
                  </Text>
              </View>

          </View>
        </TouchableOpacity>
      ))
    :null
  )

  render(){
    
    return (
      <ScrollView style={{backgroundColor: '#f0f0f0'}}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          flexWrap: 'nowrap'
        }}>
          {this.showGames(this.props.Games)}
        </View>
      </ScrollView>
    );
}

  }
  

const styles = StyleSheet.create({
  gameContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
    shadowColor: '#dddddd',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 2
  },
  gameBox: {
    width: '33.3%',
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  teamRecord: {
    fontFamily: "Roboto-Light",
    fontSize: 12
  },
  gameTime: {
    fontFamily: 'Roboto-Bold',
    fontSize: 15
  }
});

function mapStateToProps(state) {
  console.log(state);
  return {
    Games: state.Games,
  }
}

export default connect(mapStateToProps)(GamesComponent);
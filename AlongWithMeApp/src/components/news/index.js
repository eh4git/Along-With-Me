
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
import { getNews } from '../../store/actions/news_actions';
import Moment from 'moment'

class NewsComponent extends Component {

  componentDidMount() {
    this.props.dispatch(getNews());
  }

  renderArticle = (news) => (
    news.articles ?
      news.articles.map((item, i) => (
        <TouchableOpacity
          key={i}
          onPress={()=> this.props.navigation.navigate('Article',{
            ...item
          })}
        >
         <View style={styles.cardContainer}>
          <View>
            <Image 
            style={{height:150, justifyContent: 'space-around'}}
            //source should be item.image but the link provided is broken
            source={{uri: `https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg`}}
            resizeMode='cover'
            />
          </View>
          <View style={styles.contentCard}>
            <Text style={styles.titleCard}>{item.title}</Text>
            <View style={styles.bottomCard}>
              <Text style={styles.bottomCardTeam}>{item.team} - </Text>
              <Text style={styles.bottomCardText}>Posted on {Moment(item.date).format('d MMM')} </Text>
            </View>
          </View>
         </View>
        </TouchableOpacity>
      ))
      : null
  )

  render() {
    console.log(this.props.news)
    return (
      <ScrollView style={{ backgroundColor: '#F0F0F0' }}>
        {this.renderArticle(this.props.News)}
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
 cardContainer:{
   backgroundColor: '#fff',
   margin: 10,
   shadowColor: '#dddddd',
   shadowOffset: {width: 0, height: 2},
   shadowOpacity: 0.8,
   shadowRadius: 2,
   elevation: 1,
   borderRadius: 2
 },
 contentCard:{
   borderWidth: 1,
   borderColor: '#dddddd'
 },
 titleCard:{
   fontFamily: 'Roboto-Bold',
   color: '#232323',
   fontSize: 16,
   padding: 10
 },
 bottomCard:{
   flex: 1,
   flexDirection: 'row',
   borderTopWidth: 1,
   borderTopColor: '#e6e6e6',
   padding: 10
 },
 bottomCardTeam:{
  fontFamily: 'Roboto-Bold',
  color: '#828282',
  fontSize: 12,

 },
 bottomCardText:{
  fontFamily: 'Roboto-Light',

  color: '#828282',
  fontSize: 12,
 }

});

function mapStateToProps(state) {
  console.log(state)
  return {
    News: state.News
  }
}

export default connect(mapStateToProps)(NewsComponent)
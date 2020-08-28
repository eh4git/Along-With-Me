import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  Button
} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {connect} from 'react-redux';
import {autoSignIn} from '../../store/actions/user_actions';
import { getTokens, setTokens} from '../../utils/misc';
import Puppy from '../../assets/Puppy.mp4';

class  GameArticleComponent extends Component {

  state = {
    loading: false,
    isAuth: false
  }

  manageState(loading, isAuth) {
    this.setState({
      loading,
      isAuth
    })
  }

  componentDidMount() {
    const User = this.props.User;

    getTokens((value) =>{
      if(value[0][1] === null) {
        this.manageState(false, false)
      } else {
        this.props.dispatch(autoSignIn(value[0][1]))
          .then(() => {
            !User.auth.token ?
              this.manageState(false, false)
            :
              setTokens(User.auth, () => {
                this.manageState(false, true)
              })
          })
      }
    })
  }

  render(){
    const params = this.props.navigation.state.params;

    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    } else {
      return (
        <ScrollView style={{backgroundColo: '#F0F0F0'}}>
          {
            this.state.isAuth ?
              <Video
                source={Puppy}
                muted={true}
                pause={true}
                style={styles.video}
              />
            :
              <View style={styles.notAuth}>
                <Icon name="md-sad" size={80} color="#d5d5d5" />
                
                <Text style={styles.notAuthText}>
                  Sorry, you must be logged in to see this content.
                </Text>

                <Button
                  title="Login / Register"
                  onPress={() => this.props.navigation.navigate('Auth')}
                />
              </View>
          }
        </ScrollView>
      )
    }
}
  }
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  notAuth: {
    flex: 1,
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notAuthText: {
    fontFamily: 'Roboto-Bold'
  },
  video: {
    width: '100%',
    height: 250
  }
});

function mapStateToProps(state){
  return {
      User:state.User
  }
}

export default connect(mapStateToProps)(GameArticleComponent);
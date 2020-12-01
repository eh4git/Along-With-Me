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

// {"_app": 
//   {"_automaticDataCollectionEnabled": true,
//    "_deleteApp": [Function bound deleteApp],
//     "_deleted": false, 
//     "_initialized": true, 
//     "_name": "[DEFAULT]",
//      "_nativeInitialized": true, "_options": {"apiKey": "AIzaSyC8aDxXuCMwppO6ne9IPSwxuGn-ikFUURE", "appId": "1:455176172872:web:0f95df233b7f92e359ef7d", "databaseURL": "https://alongwithme-22328.firebaseio.com", "gaTrackingId": null, "messagingSenderId": "455176172872", "projectId": "alongwithme-22328", "storageBucket": "alongwithme-22328.appspot.com"
//     }
//   },
//       "_authResult": true, "_config": 
      
//       {"ModuleClass": [Function FirebaseAuthModule], "hasCustomUrlOrRegionSupport": false, "hasMultiAppSupport": true, "namespace": "auth", "nativeEvents": ["auth_state_changed", "auth_id_token_changed", "phone_auth_state_changed"], "nativeModuleName": "RNFBAuthModule", "statics": 

//         {"AppleAuthProvider": [Function AppleAuthProvider], "EmailAuthProvider": [Function EmailAuthProvider], "FacebookAuthProvider": [Function FacebookAuthProvider], "GithubAuthProvider": [Function GithubAuthProvider], "GoogleAuthProvider": [Function GoogleAuthProvider], "OAuthProvider": [Function OAuthProvider], "PhoneAuthProvider": [Function PhoneAuthProvider], "PhoneAuthState": [Object], "TwitterAuthProvider": [Function TwitterAuthProvider]}, 
        
//         "version": "9.2.7"}, 
        
//         "_customUrlOrRegion": undefined, "_languageCode": null, 
        
//         "_nativeModule": 
//         {"APP_LANGUAGE": 
//         {"[DEFAULT]": null}, "APP_USER": 
//         {"[DEFAULT]": [Object]}, "addAuthStateListener": [Function anonymous], "addIdTokenListener": [Function anonymous], "applyActionCode": [Function anonymous], "checkActionCode": [Function anonymous], "confirmPasswordReset": [Function anonymous], "confirmationResultConfirm": [Function anonymous], "createUserWithEmailAndPassword": [Function anonymous], "delete": [Function anonymous], "fetchSignInMethodsForEmail": [Function anonymous], "getConstants": [Function anonymous], "getIdToken": [Function anonymous], "getIdTokenResult": [Function anonymous], "linkWithCredential": [Function anonymous], "reauthenticateWithCredential": [Function anonymous], "reload": [Function anonymous], "removeAuthStateListener": [Function anonymous], "removeIdTokenListener": [Function anonymous], "sendEmailVerification": [Function anonymous], "sendPasswordResetEmail": [Function anonymous], "sendSignInLinkToEmail": [Function anonymous], "setAutoRetrievedSmsCodeForPhoneNumber": [Function anonymous], "setLanguageCode": [Function anonymous], "signInAnonymously": [Function anonymous], "signInWithCredential": [Function anonymous], "signInWithCustomToken": [Function anonymous], "signInWithEmailAndPassword": [Function anonymous], "signInWithEmailLink": [Function anonymous], "signInWithPhoneNumber": [Function anonymous], "signOut": [Function anonymous], "unlink": [Function anonymous], "updateEmail": [Function anonymous], "updatePassword": [Function anonymous], "updatePhoneNumber": [Function anonymous], "updateProfile": [Function anonymous], "useDeviceLanguage": [Function anonymous], "verifyBeforeUpdateEmail": [Function anonymous], "verifyPasswordResetCode": [Function anonymous], "verifyPhoneNumber": [Function anonymous]
//       },
        
//         "_settings": null, "_user": 
        
//         {"displayName": null, "email": "anna@me.com", "emailVerified": false, "isAnonymous": false, "metadata": [Object], "phoneNumber": null, "photoURL": null, "providerData": [Array], "providerId": "firebase", "uid": "Jb6KrlnSikfWFkSUaiJeDfRDakQ2"}}

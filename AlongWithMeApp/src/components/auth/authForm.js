import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';
import Input from '../../utils/forms/input';
import ValidationRules from '../../utils/forms/validationRules';
import {connect} from 'react-redux';
import {signUp, signIn} from '../../store/actions/user_actions';
import {bindActionCreators} from 'redux';
import { setTokens} from '../../utils/misc'
import {  Auth } from "../../App";
import {  SignInUser,SignUpUser,SignOutUser} from "./API";

 class AuthForm extends Component {
  state = {
    type: 'Login',
    user: 'party',
    action: 'Login',
    actionMode: 'I want to register',
    hasErrors: false,
    form: {
      email: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          isRequired: true,
          isEmail: true,
        },
      },
      password: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          isRequired: true,
          minLength: 6,
        },
      },
      confirmPassword: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          confirmPass: 'password',
        },
      },
    },
  };

  //this will use data from the resolve
  manageAccess = (data)=> {
    console.warn(data)
      if(!data){
          this.setState({hasErrors:true})
      }else{
        //Auth()._user
          setTokens(data,()=>{
            this.setState({hasErrors:false})
            this.props.goNext()
          })

      }

      
  }

  submitUser = () => {
    let isFormValid = true;
    let formToSubmit = {};
    const formCopy = this.state.form;

    for (let key in formCopy) {
      if (this.state.type === 'Login') {
        // LOGIN

        if (key !== 'confirmPassword') {
          isFormValid = isFormValid && formCopy[key].valid;
          formToSubmit[key] = formCopy[key].value;
        }
      } else {
        // REGISTER

        isFormValid = isFormValid && formCopy[key].valid;
        formToSubmit[key] = formCopy[key].value;
      }
    }


  //   if (isFormValid) {
  //     if (this.state.type === 'Login') {
        
  //           this.signUserIn()
       
  //     } else {
       
  //           this.signUserUp()
        
  //     }
  //   } else {
  //     this.setState({
  //       hasErrors: true,
  //     });
  //   }
  // };

  if (isFormValid) {
    if (this.state.type === 'Login') {
      this.signUserIn()
    } else {
      this.signUserUp()
    }
  } else {
    this.setState({
      hasErrors: true,
    });
  }
};

  changeFormType = () => {
    const type = this.state.type;
    //   console.log("working")

    this.setState({
      type: type === 'Login' ? 'Register' : 'Login',
      action: type === 'Login' ? 'Register' : 'Login',
      actionMode: type === 'Login' ? 'I want to Login' : 'I want to register',
    });
  };

  formHasErrors = () =>
    this.state.hasErrors ? (
      <View style={styles.errorContainer}>
        <Text style={styles.errorLabel}>Double check your info!</Text>
      </View>
    ) : null;

  confirmPassword = () =>
    this.state.type != 'Login' ? (
      <Input
        placeholder="Confirm your password"
        placeholderTextColor="#cecece"
        type={this.state.form.confirmPassword.type}
        value={this.state.form.confirmPassword.value}
        onChangeText={(value) => this.updateInput('confirmPassword', value)}
        secureTextEntry
        // overrideStyle={}
      />
    ) : null;

  updateInput = (name, value) => {
    this.setState({
      hasErrors: false,
    });

    let formCopy = this.state.form;
    formCopy[name].value = value;

    // rules go here

    let rules = formCopy[name].rules;
    let valid = ValidationRules(value, rules, formCopy);

    formCopy[name].valid = valid;

    this.setState({
      form: formCopy,
    });
  };

  //ANNA data contains resolve from API.js
   signOut = () => {
    SignOutUser()
    .then((data) => {
      console.warn(data)
      this.setState({user: data})
      alert(data);

    })
    .catch((err) => {
      alert(err);
    });
    
  };
  //ANNA async manage access???

  signUserIn = () => {
    SignInUser(this.state.form.email.value, this.state.form.password.value)
      .then((data) => {
        console.warn(data)
        this.setState({user: data})
        alert(data);
        this.manageAccess(this.state.user)
        this.props.goNext()
      })
      .catch((err) => {
        alert(err);
      });
      // this.manageAccess(this.state.user)
  };

  signUserUp = () => {
    SignUpUser(this.state.form.email.value, this.state.form.password.value)
      .then((data) => {
        console.warn(data)
        alert(data);
        this.props.goNext()
      })
      .catch((err) => {
        alert(err);
      });
  };


  render() {
    return (
      <View>
        <Input
          placeholder="Enter Email"
          placeholderTextColor="#cecece"
          autoCapitalize={'none'}
          type={this.state.form.email.type}
          value={this.state.form.email.value}
          keyboardType={'email-address'}
          onChangeText={(value) => this.updateInput('email', value)}
          // overrideStyle={}
        />
        <Input
          placeholder="Enter your password"
          placeholderTextColor="#cecece"
          type={this.state.form.password.type}
          value={this.state.form.password.value}
          onChangeText={(value) => this.updateInput('password', value)}
          secureTextEntry
          // overrideStyle={}
        />
        {this.confirmPassword()}
        {this.formHasErrors()}

        <View style={{marginTop: 20}}>
          <View style={styles.button}>
            <Button title={this.state.action} onPress={this.submitUser} color="#D9C0AB"/>
          </View>
          <View style={styles.button}>
            <Button
              title={this.state.actionMode}
              onPress={this.changeFormType}
              color="#D9C0AB"
            />
          </View>
          {/* <View style={styles.button}>
            <Button
              title="I'll do it later"
              onPress={() => this.props.goNext()}
              color="#D9C0AB"
            />
          </View> */}
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  errorContainer: {
    marginBottom: 10,
    marginTop: 30,
    padding: 10,
    backgroundColor: '#f44336',
  },
  errorLabel: {
    color: '#fff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  button: {
    ...Platform.select({
      ios: {
        marginBottom: 0
      },
      android: {
        marginBottom: 10,
        marginTop: 10,
      },
    }),
  },
});

function mapStateToProps(state){
    // console.log(state)
    return {
        User:state.User
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({signIn,signUp}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthForm)
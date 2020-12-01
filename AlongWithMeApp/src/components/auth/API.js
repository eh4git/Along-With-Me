import {Auth} from '../../App';
import * as firebase from "firebase";

export const SignUpUser = (email, password) => {
  return new Promise(function (resolve, reject) {
    Auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        
        resolve(firebase.auth.CurrentUser)
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const SignInUser = (email, password) => {
  return new Promise(function (resolve, reject) {
    Auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // resolve(Auth()._user.uid)
        resolve(Auth()._user)
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const SignOutUser = (email, password) => {
  return new Promise(function (resolve, reject) {
    Auth()
      .signOut()
      .then(() => {
        resolve('Signed Out Successfully');
      })
      .catch((err) => {
        reject(err);
      });
  });
};
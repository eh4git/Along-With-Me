import {Auth} from '../../App';

export const SignUpUser = (email, password) => {
  return new Promise(function (resolve, reject) {
    Auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        resolve('Signed Up Successfully');
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
        resolve('Logged In Successfully');
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
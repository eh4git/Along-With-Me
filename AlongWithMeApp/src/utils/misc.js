// import {AsyncStorage} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

export const FIREBASEURL = `https://alongwithme-22328.firebaseio.com`;
export const APIKEY = `AIzaSyC8aDxXuCMwppO6ne9IPSwxuGn-ikFUURE`;
export const SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`;
export const SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`;
export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`

export const getTokens = (cb) =>{
    AsyncStorage.multiGet([
        '@AlongwithmeApp@token',
        '@AlongwithmeApp@refreshToken',
        '@AlongwithmeApp@expireToken',
        '@AlongwithmeApp@uid'

    ]).then(value => {
        cb(value);
    })
}

export const setTokens = (values,cb) =>{
    const dateNow = new Date();
    const expiration = dateNow.getTime() + (3600 * 1000)

    AsyncStorage.multiSet([
        ['@AlongwithmeApp@token', values.token],
        ['@AlongwithmeApp@refreshToken',values.refreshToken],
        ['@AlongwithmeApp@expireToken',expiration.toString()],
        ['@AlongwithmeApp@uid',values.uid],

    ]).then(res => {
        cb();
    })
}

export const convertFirebase = (data) => {
    const newData = [];

    for(let key in data){
        newData.push({
            ...data[key],
            id: key
        })
    }
    return newData;
}

export const findTeamData = (teamId, teams) => {
    const value = teams.find((team) => {
        return team.id === teamId
    })
    return value;
}
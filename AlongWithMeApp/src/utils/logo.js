import React, { Component } from 'react';
import { Image } from 'react-native'
import LogoImg from '../assets/images/along-with-me-logo.png'

const LogoTitle = ()=>(
    <Image 
        source= {LogoImg}
        style={{width:70, height:50}}
        resizeMode="contain"
    />
)
export default LogoTitle
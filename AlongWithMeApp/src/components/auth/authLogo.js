import React, {Component} from 'react';

import { View,  Image} from 'react-native';
import LogoImage from '../../assets/images/along-with-me-logo.png'

const LogoComponent = () => (
    <View style={{alignItems:'center'}}>
        <Image 
            source={LogoImage}
            resizeMode={'center'}
            style={{
                width: 250,
                height: 250
            }}
        
        />
    </View>
)

export default LogoComponent;
import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const Logo = () => (
    <View style={styles.container}>
        <Image style={styles.imageBackground} source={require('./images/background.png')}>
            <Image
                resizeMode="contain"
                style={styles.image} source={require('./images/logo.png')}/>
        </Image>
        <Text style={styles.text}>Currency converter</Text>
    </View>
);

export default Logo;
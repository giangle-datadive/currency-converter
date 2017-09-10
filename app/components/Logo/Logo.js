import React from 'react';
import {View, Text, Keyboard, Animated, Platform} from 'react-native';
import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends React.Component {
    constructor() {
        super();
        this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
        this.imageWidth = new Animated.Value(styles.$largeImageSize);
    }

    componentDidMount() {
        let keyboardShowEvent = 'keyboardWillShow';
        let keyboardHideEvent = 'keyboardWillHide';
        if(Platform.OS === 'android') {
            keyboardShowEvent = 'keyboardDidShow';
            keyboardHideEvent = 'keyboardDidHide';
        }
        this.keyboardShowListener = Keyboard.addListener(keyboardShowEvent, this.keyboardShow);
        this.keyboardHideListener = Keyboard.addListener(keyboardHideEvent, this.keyboardHide);
    }

    componentWillUnmount() {
        this.keyboardShowListener.remove();
        this.keyboardHideListener.remove();
    }

    keyboardShow = () => {
        Animated.parallel([
            Animated.timing(
                this.containerImageWidth,
                {
                    toValue: styles.$smallContainerSize,
                    duration: ANIMATION_DURATION,
                }
            ),
            Animated.timing(
                this.imageWidth,
                {
                    toValue: styles.$smallImageSize,
                    duration: ANIMATION_DURATION,
                }
            )
        ]).start();
    };

    keyboardHide = () => {
        Animated.parallel([
            Animated.timing(
                this.containerImageWidth,
                {
                    toValue: styles.$largeContainerSize,
                    duration: ANIMATION_DURATION,
                }
            ),
            Animated.timing(
                this.imageWidth,
                {
                    toValue: styles.$largeImageSize,
                    duration: ANIMATION_DURATION,
                }
            )
        ]).start();
    };

    render() {
        const containerImageStyle = [
            styles.imageBackground,
            {width: this.containerImageWidth, height: this.containerImageWidth}
        ];
        const imageStyle = [
            styles.image,
            {width: this.imageWidth, height: this.imageWidth}
        ];

        return (
            <View style={styles.container}>
                <Animated.Image style={containerImageStyle} source={require('./images/background.png')}>
                    <Animated.Image
                        resizeMode="contain"
                        style={imageStyle} source={require('./images/logo.png')}/>
                </Animated.Image>
                <Text style={styles.text}>Currency converter</Text>
            </View>
        );
    }
}

export default Logo;
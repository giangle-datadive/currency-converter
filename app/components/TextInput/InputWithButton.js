import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';
import styles from './styles';
import color from 'color';

const InputWithButton = (props) => {
    const {onPress, buttonText, editable, onChangText, textColor} = props;
    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
        styles.$buttonBackgroundColorModifier
    );
    const containerStyles = [styles.container];
    if (!editable) {
        containerStyles.push(styles.containerDisable);
    }

    let buttonTextStyle = [styles.buttonText];
    if (textColor) {
        buttonTextStyle.push({color: textColor});
    }

    return (
        <View style={containerStyles}>
            <TouchableHighlight
                underlayColor={underlayColor}
                style={styles.buttonContainer} onPress={onPress}>
                <Text style={buttonTextStyle}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border}/>
            <TextInput
                onChangeText={onChangText}
                underlineCOlorAndroid="transparent"
                style={styles.input} {...props}/>
        </View>
    )
};

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
    textColor: PropTypes.string,
};

export default InputWithButton;
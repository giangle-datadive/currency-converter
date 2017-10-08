import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './styles';
import Icon from './Icon';

const ListItem = ({onPress, text, selected = false, checkmark = true, visible = true, customIcon = null, iconBackground}) => (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
        <View style={styles.row}>
            <Text style={styles.text}>{text}</Text>
            {selected ? <Icon iconBackground={iconBackground} checkmark={checkmark} visible={visible}/> : null}
            {customIcon}
        </View>
    </TouchableHighlight>
);

ListItem.PropTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool,
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    custonIcon: PropTypes.element,
    iconBackground: PropTypes.string,
};

export default ListItem;
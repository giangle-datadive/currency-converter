import React from 'react';
import {ScrollView, StatusBar, Platform} from 'react-native';
import {ListItem, Separator} from '../components/List';
import {Ionicons} from '@expo/vector-icons';
import PropTypes from 'prop-types';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends React.Component {
    handleThemePress = () => {
        this.props.navigation.navigate('Themes');
    };

    handleSitePress = () => {
        console.log('handle theme')
    };

    render() {
        return (
            <ScrollView>
                <StatusBar barStyle="default"/>
                <ListItem
                    customIcon={
                        <Ionicons
                            color={ICON_COLOR}
                            size={ICON_SIZE}
                            name={`${ICON_PREFIX}-arrow-forward`}/>
                    }
                    onPress={this.handleThemePress}
                    text="Themes"/>
                <Separator/>
                <ListItem
                    customIcon={
                        <Ionicons
                            color={ICON_COLOR}
                            size={ICON_SIZE}
                            name={`${ICON_PREFIX}-link`}/>
                    }
                    onPress={this.handleSitePress}
                    text="Fixer.io"/>
            </ScrollView>
        )
    }
}

Options.PropTypes = {
    navigation: PropTypes.object,
};

export default Options;
import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {ListItem, Separator} from '../components/List';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $green: '$primaryGreen',
    $orange: '$primaryOrange',
    $purple: '$primaryPurple',
});

class Themes extends React.Component {
    handlePressTheme = (color) => {
        console.log(color);
    };

    render() {
        return (
            <ScrollView>
                <StatusBar style="default"/>
                <ListItem
                    iconBackground={styles.$blue}
                    selected
                    checkmark={false}
                    text="Blue" onPress={() => this.handlePressTheme(styles.$blue)}/>
                <Separator/>
                <ListItem
                    iconBackground={styles.$orange}
                    selected
                    checkmark={false}
                    text="Orange" onPress={() => this.handlePressTheme(styles.$orange)}/>
                <Separator/>
                <ListItem
                    iconBackground={styles.$green}
                    selected
                    checkmark={false}
                    text="Green" onPress={() =>this.handlePressTheme(styles.$green)}/>
                <Separator/>
                <ListItem
                    iconBackground={styles.$purple}
                    selected
                    checkmark={false}
                    text="Purple" onPress={() => this.handlePressTheme(styles.$purple)}/>
                <Separator/>
            </ScrollView>
        )
    }
}

export default Themes;
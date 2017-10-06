import React from 'react';
import {FlatList, StatusBar, View} from 'react-native';
import currency from '../data/currency';
import {ListItem, Separator} from '../components/List';
import PropsTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';
const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends React.Component {
    handlePress = () => {
        this.props.navigation.dispatch(NavigationActions.back());
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar translucent={false} barStyle="default"/>
                <FlatList
                    keyExtractor={item => item}
                    data={currency}
                    ItemSeparatorComponent={Separator}
                    renderItem={({item}) => (
                        <ListItem
                            onPress={this.handlePress}
                            text={item}
                            selected={TEMP_CURRENT_CURRENCY === item}/>
                    )}/>
            </View>
        );
    }
}

CurrencyList.PropTypes = {
    navigation: PropsTypes.object,
};

export default CurrencyList;
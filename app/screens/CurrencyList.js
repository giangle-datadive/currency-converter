import React from 'react';
import {FlatList, StatusBar, View} from 'react-native';
import {connect} from 'react-redux';
import currency from '../data/currency';
import {ListItem, Separator} from '../components/List';
import PropsTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';

const TEMP_CURRENT_CURRENCY = 'CAD';
import {changeBaseCurrency, changeQuoteCurrency} from '../actions/currencies';

class CurrencyList extends React.Component {
    handlePress = (currency) => {
        const {type} = this.props.navigation.state.params;
        const {changeBaseCurrency, changeQuoteCurrency} = this.props;
        if (type === 'base') {
            changeBaseCurrency(currency);
        } else if (type === 'quote') {
            changeQuoteCurrency(currency);
        }
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
                            onPress={() => this.handlePress(item)}
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

const mapDispatchToProps = dispatch => ({
    changeQuoteCurrency: (currency) => dispatch(changeQuoteCurrency(currency)),
    changeBaseCurrency: (currency) => dispatch(changeBaseCurrency(currency)),
});

export default connect(null, mapDispatchToProps)(CurrencyList);
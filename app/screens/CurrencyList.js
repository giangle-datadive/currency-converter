import React from 'react';
import {FlatList, StatusBar, View} from 'react-native';
import {connect} from 'react-redux';
import currency from '../data/currency';
import {ListItem, Separator} from '../components/List';
import PropsTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';

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
        let compareCurrency = this.props.baseCurrency;
        if (this.props.navigation.state.params.type === 'quote') {
            compareCurrency = this.props.quoteCurrency
        }

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
                            iconBackground={this.props.primaryColor}
                            selected={compareCurrency === item}/>
                    )}/>
            </View>
        );
    }
}

CurrencyList.PropTypes = {
    navigation: PropsTypes.object,
    baseCurrency: PropsTypes.string,
    quoteCurrency: PropsTypes.string,
    changeQuoteCurrency: PropsTypes.func,
    changeBaseCurrency: PropsTypes.func,
    primaryColor: PropsTypes.string,
};

const mapStateToProps = ({currencies, theme}) => ({
    baseCurrency: currencies.baseCurrency,
    quoteCurrency: currencies.quoteCurrency,
    primaryColor: theme.primaryColor,
});

const mapDispatchToProps = dispatch => ({
    changeQuoteCurrency: (currency) => dispatch(changeQuoteCurrency(currency)),
    changeBaseCurrency: (currency) => dispatch(changeBaseCurrency(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList);
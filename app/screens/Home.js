import React from 'react';
import {StatusBar, KeyboardAvoidingView} from 'react-native';
import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {InputWithButton} from '../components/TextInput';
import {ClearButton} from '../components/Button';
import {LastConverted} from '../components/Text';
import {Header} from '../components/Header';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {swapCurrency, changeCurrencyAmount} from '../actions/currencies';

class Home extends React.Component {

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', {title: 'Base Currency', type: 'base'});
    };

    handlePressQuoteCurrency = () => {
        this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency', type: 'quote'});
    };

    handleChangeText = (text) => {
        this.props.dispatch(changeCurrencyAmount(text));
    };

    handleOptionPress = () => {
        this.props.navigation.navigate('Options');
    };

    reverseCurrency = () => {
        this.props.dispatch(swapCurrency());
    };

    render() {
        const {baseCurrency, quoteCurrency, amount, conversionRate, isFetching, lastConvertedDate} = this.props;
        let quotePrice = (amount * conversionRate).toFixed(2);
        if (isFetching) {
            quotePrice = '...';
        }

        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content"/>
                <Header onPress={this.handleOptionPress}/>
                <KeyboardAvoidingView behavior="padding">
                    <Logo/>
                    <InputWithButton
                        keyboardType="numeric"
                        defaultValue={amount.toString()}
                        onPress={this.handlePressBaseCurrency}
                        onChangText={this.handleChangeText}
                        buttonText={baseCurrency}/>
                    <InputWithButton
                        onPress={this.handlePressQuoteCurrency}
                        buttonText={quoteCurrency}
                        value={quotePrice}
                        editable={false}/>

                    <LastConverted
                        base={baseCurrency}
                        quote={quoteCurrency}
                        conversionRate={conversionRate}
                        date={lastConvertedDate}/>

                    <ClearButton onPress={this.reverseCurrency} text="Reverse currency"/>
                </KeyboardAvoidingView>
            </Container>
        );
    }
}

Home.PropTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    isFetching: PropTypes.boolean,
    lastConvertedDate: PropTypes.object,
};

const mapStateToProps = (state) => {
    const {currencies: {baseCurrency, quoteCurrency, amount}} = state;
    const conversionSelector = state.currencies.conversions[baseCurrency] || {};
    const rates = conversionSelector.rates || {};

    return {
        baseCurrency,
        quoteCurrency,
        amount,
        conversionRate: rates[quoteCurrency] || 0,
        isFetching: conversionSelector.isFetching,
        lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    }
};

export default connect(mapStateToProps)(Home);
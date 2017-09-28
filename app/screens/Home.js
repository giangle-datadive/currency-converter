import React from 'react';
import {StatusBar, KeyboardAvoidingView} from 'react-native';
import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {InputWithButton} from '../components/TextInput';
import {ClearButton} from '../components/Button';
import {LastConverted} from '../components/Text';
import {Header} from '../components/Header';
import PropTypes from 'prop-types';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.4';
const TEMP_CONVERSION_RATE = 0.794;
const TEMP_CONVERSION_DATE = new Date();


class Home extends React.Component {

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', {title: 'Base Currency'});
    };

    handlePressQuoteCurrency = () => {
        this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency'});
    };

    handleChangeText = (text) => {
        console.log(text);
    };

    handleOptionPress = () => {
        this.props.navigation.navigate('Options');
    };

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content"/>
                <Header onPress={this.handleOptionPress}/>
                <KeyboardAvoidingView behavior="padding">
                    <Logo/>
                    <InputWithButton
                        keyboardType="numeric"
                        defaultValue={TEMP_BASE_PRICE}
                        onPress={this.handlePressBaseCurrency}
                        onChangText={this.handleChangeText}
                        buttonText={TEMP_BASE_CURRENCY}/>
                    <InputWithButton
                        onPress={this.handlePressQuoteCurrency}
                        buttonText={TEMP_QUOTE_CURRENCY}
                        value={TEMP_QUOTE_PRICE}
                        editable={false}/>

                    <LastConverted
                        base={TEMP_BASE_CURRENCY}
                        quote={TEMP_QUOTE_CURRENCY}
                        conversionRate={TEMP_CONVERSION_RATE}
                        date={TEMP_CONVERSION_DATE}/>

                    <ClearButton text="Reverse currency"/>
                </KeyboardAvoidingView>
            </Container>
        );
    }
}

Home.PropTypes = {
    navigation: PropTypes.object
};

export default Home;
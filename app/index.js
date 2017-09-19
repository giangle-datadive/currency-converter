import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';
import Options from './screens/Options';
import CurrencyList from './screens/CurrencyList';
import Themes from './screens/Themes';

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryOrange: '#D57A66',
    $primaryGreen: '#00BD9D',
    $primaryPurple: '#9e768F',
    $primaryColor: '#4F6D7A',
    $white: '#fff',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $lightGray: '#F0F0F0',
    $darkText: '#343434',
});

export default Themes;
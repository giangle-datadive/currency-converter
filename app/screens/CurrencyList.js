import React from 'react';
import {FlatList, StatusBar, View} from 'react-native';
import currency from '../data/currency';
import {ListItem, Separator} from '../components/List';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends React.Component {
    handlePress = () => {
        console.log('handle press');
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

export default CurrencyList;
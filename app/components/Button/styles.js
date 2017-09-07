import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 19,
        marginRight: 5,
    },
    text: {
        fontWeight: '300',
        paddingHorizontal: 11,
        fontSize: 14,
        color: '$white',
    }
});
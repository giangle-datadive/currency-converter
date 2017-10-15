import {
    CHANGE_CURRENCY_AMOUNT,
    SWAP_CURRENCY,
    CHANGE_BASE_CURRENCY,
    CHANGE_QUOTE_CURRENCY,
    CONVERSION_RESULT,
    CONVERSION_ERROR,
    GET_INITIAL_CONVERSION
} from '../actions/currencies';

const initialState = {
    baseCurrency: 'USD',
    quoteCurrency: 'GBP',
    amount: 100,
    conversions: {},
    error: false,
};

const setConversion = (state, action) => {
    if (state.conversions[action.currency]) {
        return {
            ...state.conversions,
        }
    }

    return {
        ...state.conversions,
        [action.currency]: {
            isFetching: true,
            date: '',
            rates: {},
        },
    };
};


const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_CURRENCY_AMOUNT:
            return {...state, amount: action.amount};
        case SWAP_CURRENCY:
            return {
                ...state,
                baseCurrency: state.quoteCurrency,
                quoteCurrency: state.baseCurrency,
            };
        case CHANGE_BASE_CURRENCY:
            return {
                ...state,
                baseCurrency: action.currency,
                conversions: setConversion(state, action)
            };
        case CHANGE_QUOTE_CURRENCY:
            return {
                ...state,
                quoteCurrency: action.currency,
                conversions: setConversion(state, action)
            };
        case GET_INITIAL_CONVERSION:
            return {
                ...state,
                conversions: setConversion(state, {currency: state.baseCurrency})
            };
        case CONVERSION_RESULT:
            return {
                ...state,
                conversions: {
                    ...state.conversions,
                    [action.data.base]: {
                        isFetching: false,
                        ...action.data,
                    }
                }
            };
        case CONVERSION_ERROR:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state || initialState;
    }
};

export default reducer;
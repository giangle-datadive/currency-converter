import {
    SWAP_CURRENCY,
    CHANGE_QUOTE_CURRENCY,
    CHANGE_BASE_CURRENCY,
    GET_INITIAL_CONVERSION,
    CONVERSION_ERROR,
    CONVERSION_RESULT
} from '../actions/currencies';
import axios from 'axios';
import {takeEvery, select, put, call} from 'redux-saga/effects';

const fetchRate = (currency) => axios.get(`http://api.fixer.io/latest?base=${currency}wer`);

const fetchLatestConversionRate = function* fetchLatestConversionRate(action) {
    try {
        let currency = action.currency;
        if (currency === undefined) {
            currency = yield select(state => state.currencies.baseCurrency)
        }
        const {data} = yield call(fetchRate, currency);
        if (data.error) {
            yield put({type: CONVERSION_ERROR, error: data.error});
        } else {
            yield put({type: CONVERSION_RESULT, data});
        }
    } catch (e) {
        yield put({type: CONVERSION_ERROR, error: e.message});
    }
};

const rootSaga = function* rootSaga() {
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRate);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRate);
    yield takeEvery(CHANGE_QUOTE_CURRENCY, fetchLatestConversionRate);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRate);
};

export default rootSaga;
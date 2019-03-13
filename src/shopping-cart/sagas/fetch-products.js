import _ from 'lodash';
import { put, call, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { FETCH_PRODUCTS } from '../constants/action-types';
import * as actions from '../actions/actions';

import mapProductResponse from '../mapper/data-mapper.js';

import data from '../../__mock__data/shopping-cart-data';

function* fetchAllProduct() {
    try {
        const mappedData = mapProductResponse(data['products']);
        yield put(actions.saveProducts({ ...data, products: mappedData }));
    } catch (e) {
        yield put(actions.saveProducts({}));
    }
}

function* fetchProduct() {
    yield call(fetchAllProduct);
}

function* watchFetchProduct() {
    yield call(takeLatest, FETCH_PRODUCTS, fetchProduct);
}

export {
    watchFetchProduct,
};

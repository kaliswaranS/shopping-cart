import _ from 'lodash';
import * as actionTypes from '../constants/action-types';

const initialState = {
    products: [],
    pincode: {},
    discount: {},
    pincodeValue: '',
    deliveryPincode: {},
};

function shoppingCartReducer(state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.SAVE_PRODUCTS: {
            return {
                ...state,
                products: _.get(action.data, 'products'),
                pincode: _.get(action.data, 'pincode'),
                discount: _.get(action.data, 'discount'),
            };
        }
        case actionTypes.UPDATE_PRODUCT_QUANTITY: {
            return {
                ...state,
                products: action.products,
            };
        }
        case actionTypes.DELETE_PRODUCT: {
            return {
                ...state,
                products: _.filter(state.products, (i) => i.id !== action.id),
            };
        }
        case actionTypes.UPDATE_PINCODE: {
            return {
                ...state,
                pincodeValue: action.pincode,
            }
        }
        case actionTypes.VALIDATE_PINCODE: {
            return {
                ...state,
                deliveryPincode: state.pincode[state.pincodeValue] || {},
            }
        }
        default:
            return state;
    }
}

export default shoppingCartReducer;

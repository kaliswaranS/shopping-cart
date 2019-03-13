import _ from 'lodash';
import { createSelector } from 'reselect';

const getProducts = state => _.get(state, 'shoppingCart.products');
const getDiscount = state => _.get(state, 'shoppingCart.discount');

const getSubTotal = createSelector(
    getProducts,
    (products = []) => {
        let result = 0;
        _.map(products, (o) => result += (o['quantity'] * o['price']));
        return result;
    }
);

const getTotalDiscount = createSelector(
    getDiscount, getSubTotal,
    (discount = [], subTotal) => subTotal > discount['minTotal'] ? (subTotal * discount['discountPercentage']) / 100 : 0
);

export {
    getSubTotal,
    getTotalDiscount
};

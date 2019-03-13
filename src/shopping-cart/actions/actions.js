import * as actionTypes from '../constants/action-types';

function fetchProducts() {
    return {
        type: actionTypes.FETCH_PRODUCTS,
    };
}

function saveProducts(data) {
    return {
        type: actionTypes.SAVE_PRODUCTS,
        data,
    };
}

function deleteProduct(id) {
    return {
        type: actionTypes.DELETE_PRODUCT,
        id,
    };
}

function updateProductQuantity(products) {
    return {
        type: actionTypes.UPDATE_PRODUCT_QUANTITY,
        products,
    };
}

function validatePincode() {
    return {
        type: actionTypes.VALIDATE_PINCODE,
    };
}

function updatePincode(pincode) {
    return {
        type: actionTypes.UPDATE_PINCODE,
        pincode,
    };
}

export {
    fetchProducts,
    saveProducts,
    deleteProduct,
    updateProductQuantity,
    validatePincode,
    updatePincode,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductTable from './product-table';
import DeliveryAvailability from './delivery-availability';
import CartSummary from './cart-summary';

import { Stepper, Alert, PageTitle } from '../../components';

import {
    getSubTotal,
    getTotalDiscount,
} from '../selectors/shopping-cart-selector';

import {
    fetchProducts as fetchProductsAction,
    updateProductQuantity as updateProductQuantityAction,
    deleteProduct as deleteProductAction,
    updatePincode as updatePincodeAction,
    validatePincode as validatePincodeAction,
} from '../actions/actions';

import productPropertytypes from '../constants/product-property-types';
import pincodePropertytypes from '../constants/pincode-property-types';

export class ShoppingCartContainer extends Component {

    componentWillMount() {
        this.props.fetchProducts();
    }

    triggerUpdateQuantityAction = (objId, quantity, products) => {
        const index = _.findIndex(products, { id: objId });
        if (index !== -1) {
            const updatedItem = { ...products[index], quantity: quantity };
            const updatedProducts = _.map(products, item => item.id === objId ? updatedItem : item);
            this.props.updateProductQuantity(updatedProducts);
        }
    }

    render() {
        const {
            products,
            deleteProduct,
            pincodeValue,
            updatePincode,
            validatePincode,
            deliveryPincode,
            summarySubTotal,
            totalDiscount,
        } = this.props;

        return (
            <div>
                <Stepper />
                <div className="container">

                    <Alert
                        type="info"
                        message={`Shop for $5000 or more and get 10% discount on your order`}
                    />

                    <article className="container__main-content">

                        <PageTitle title="Shopping Cart" />

                        <div className="shopping-cart-wrapper">
                            <ProductTable
                                products={products}
                                onQuantityClick={(id, value) => this.triggerUpdateQuantityAction(id, value, products)}
                                onDelete={deleteProduct}
                            />

                            <section className="delivery-summary">
                                <DeliveryAvailability
                                    pincodeValue={pincodeValue}
                                    updatePincode={updatePincode}
                                    onPincodeSearch={validatePincode}
                                    deliveryPincode={deliveryPincode}
                                />
                                <CartSummary
                                    summarySubTotal={summarySubTotal}
                                    totalDiscount={totalDiscount}
                                />
                            </section>
                        </div>

                    </article>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: _.get(state, 'shoppingCart.products'),
        pincodeValue: _.get(state, 'shoppingCart.pincodeValue'),
        deliveryPincode: _.get(state, 'shoppingCart.deliveryPincode'),
        summarySubTotal: getSubTotal(state),
        totalDiscount: getTotalDiscount(state),
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchProducts: fetchProductsAction,
        updateProductQuantity: updateProductQuantityAction,
        deleteProduct: deleteProductAction,
        updatePincode: updatePincodeAction,
        validatePincode: validatePincodeAction,
    }, dispatch);
}

ShoppingCartContainer.propTypes = {
    products: productPropertytypes.isRequired,
    onQuantityClick: PropTypes.func.isRequired,
    fetchProducts: PropTypes.func.isRequired,
    updateProductQuantity: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    updatePincode: PropTypes.func.isRequired,
    validatePincode: PropTypes.func.isRequired,
    deliveryPincode: pincodePropertytypes.isRequired,
    summarySubTotal: PropTypes.number,
    totalDiscount: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer);

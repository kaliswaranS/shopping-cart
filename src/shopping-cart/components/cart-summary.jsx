import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Button } from '../../components';

const getCheckoutButton = () => (
    <div className="summary-section__row">
        <Button
            className="inline"
            text="CONTINUE SHOPPING"
        />
        <Button
            className="primary"
            text="CHECKOUT"
        />
    </div>
);

const CartSummary = ({ summarySubTotal, totalDiscount }) => (
    <div className="summary-section">
        <h3 className="summary-section__title">Order Summary (xx items)</h3>
        <div>
            <div className="summary-section__row">
                <div>Subtotal</div>
                <div>{summarySubTotal} $</div>
            </div>
            <div className="summary-section__row">
                <div>Total Discount</div>
                <div> {totalDiscount > 0 && '-'} {totalDiscount} $</div>
            </div>
            <div className="summary-section__row">
                <div>Standard Shipping</div>
                <div>Free</div>
            </div>
            <div className="summary-section__row">
                <div className="summary-section__order-total">Order Total</div>
                <div className="summary-section__total">{summarySubTotal - totalDiscount} $</div>
            </div>

            {getCheckoutButton()}

        </div>

    </div>
);

CartSummary.propTypes = {
    summarySubTotal: PropTypes.number.isRequired,
    totalDiscount: PropTypes.number.isRequired,
};

export default CartSummary;
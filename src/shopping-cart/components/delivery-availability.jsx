import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import pincodePropertytypes from '../constants/pincode-property-types';

import { TextBox, Button } from '../../components';


const getDeliveryTags = (deliveryPincode) => {
    const { deliveryPrice, cashOnDelivery, estimatedDays } = deliveryPincode;
    const isFreeDelivery = deliveryPrice === 0 ? 'yes' : 'no';
    const isCashOnDelivery = cashOnDelivery ? 'yes' : 'no';
    return (
        <ul className="delivery-tags">
            <li className="delivery-tags__item">
                <span className={`delivery-tags__icon delivery-tags__icon--${isFreeDelivery}`}></span>
                <span>Free Delivery</span>
            </li>
            <li className="delivery-tags__item">
                <span className={`delivery-tags__icon delivery-tags__icon--${isCashOnDelivery}`}></span>
                <span>Cash on Delivery</span>
            </li>
            <li className="delivery-tags__item">
                <span className={"delivery-tags__icon delivery-tags__icon--yes"}></span>
                <span>Estimated Delivery time is {estimatedDays && estimatedDays.min} to {estimatedDays && estimatedDays.max} days</span>
            </li>
        </ul>
    );
};

const DeliveryAvailability = ({ updatePincode, pincodeValue, onPincodeSearch, deliveryPincode }) => (
    <div className="delivery-section">
        <h3 className="delivery-section__title">Delivery Availability</h3>

        <div className="delivery-search">
            <div className="delivery-search__input">
                <span className="delivery-search__icon"></span>
                <TextBox
                    onChange={(e) => updatePincode(e.target.value)}
                    value={pincodeValue}
                    maxLength={6}
                    placeholder="110003"
                />
            </div>
            <Button
                className="inline"
                text="CHANGE"
                onClick={onPincodeSearch}
            />
        </div>
        {getDeliveryTags(deliveryPincode)}
    </div>
);

DeliveryAvailability.propTypes = {
    updatePincode: PropTypes.func.isRequired,
    onPincodeSearch: PropTypes.func.isRequired,
    pincodeValue: PropTypes.string.isRequired,
    deliveryPincode: pincodePropertytypes.isRequired,
};

export default DeliveryAvailability;
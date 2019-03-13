import React from 'react';
import PropTypes from 'prop-types';

const Stepper = () => (
    <div className="stepper-container">
        <ul className="stepper">
            <li className="stepper__step">
                <div className="stepper__bubble stepper__bubble--active">
                    <span className="stepper__bubble-dot stepper__bubble-dot--active"></span>
                </div>
                <label className="stepper__label">Shopping Cart</label>
            </li>
            <li className="stepper__step stepper__step--disabled">
                <div className="stepper__bubble">
                    <span className="stepper__bubble-dot"></span>
                </div>
                <label className="stepper__label">Order Details</label>
            </li>
            <li className="stepper__step stepper__step--disabled">
                <div className="stepper__bubble">
                    <span className="stepper__bubble-dot"></span>
                </div>
                <label className="stepper__label">Make Payment</label>
            </li>
        </ul>
    </div>
);

export default Stepper;
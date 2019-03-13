import PropTypes from 'prop-types';

const pincodePropertytypes = PropTypes.arrayOf(
    PropTypes.shape({
        deliveryPrice: PropTypes.number,
        cashOnDelivery: PropTypes.bool,
        estimatedDays: PropTypes.shape({
            min: PropTypes.number,
            max: PropTypes.number,
        })
    })
);

export default pincodePropertytypes;
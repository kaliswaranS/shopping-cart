import PropTypes from 'prop-types';

const productPropertytypes = PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string,
        tagline: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.string,
        imageUrl: PropTypes.string,
        desc: PropTypes.string,
        planLink: PropTypes.string,
        gift: PropTypes.shape({
            name: PropTypes.string,
            desc: PropTypes.string,
            price: PropTypes.string,
        }),
    })
);

export default productPropertytypes;
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import productPropertytypes from '../constants/product-property-types';

const generateName = (name, desc) => (
    <div className="product-table__column product-table__column--product">
        <div className="product-table__content">
            <div className="product-table__image" />
            <div>
                <p className="product-table__name">{name}</p>
                {desc}
            </div>
        </div>
    </div>
);

const generatePrice = (price) => (
    <div className="product-table__column product-table__column--price">
        {price}
    </div>
);

const generateQuantityNode = (quantity, onQuantityClick, id) => (
    <div className="product-table__column product-table__column--quantity">
        <div className="product-table__content">
            <a onClick={() => quantity && onQuantityClick(id, quantity - 1)} href="javascript:void(0)" className="product-table__quantity-btn product-table__quantity-btn--decrement"></a>
            <div className="product-table__quantity-value">{quantity}</div>
            <a onClick={() => onQuantityClick(id, quantity + 1)} href="javascript:void(0)" className="product-table__quantity-btn product-table__quantity-btn--increment"></a>
        </div>
    </div>
);

const generateSubTotal = (price, quantity, onDelete, id) => (
    <div className="product-table__column product-table__column--subtotal">
        <div className="product-table__content">
            <span>{price * quantity} $ </span>
            <a onClick={() => onDelete(id)} href="javascript:void(0)" className="product-table__delete-btn"></a>
        </div>
    </div>
);

const generateRow = (row, onQuantityClick, onDelete) => {
    const { id, name, price, desc, quantity } = row;
    return (
        <div className="product-table__row" key={id}>
            {generateName(name, desc)}
            {generatePrice(price)}
            {generateQuantityNode(quantity, onQuantityClick, id)}
            {generateSubTotal(price, quantity, onDelete, id)}
        </div>
    );
};

const showNoRecordsNode = () => <div className="no-records">No Records found</div>

const ProdutTableBody = ({ products, onQuantityClick, onDelete }) => (
    <div className="product-table__body">
        {products && products.length ?
            _.map(products, (product) => generateRow(product, onQuantityClick, onDelete))
            : showNoRecordsNode()
        }
    </div>
);

ProdutTableBody.propTypes = {
    products: productPropertytypes.isRequired,
    onQuantityClick: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ProdutTableBody;
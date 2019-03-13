import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ProdutTableHeader from './product-table-header';
import ProdutTableBody from './product-table-body';

import productPropertytypes from '../constants/product-property-types';

const ProdutTable = ({ products, onQuantityClick, onDelete }) => (
    <div className="product-table">
        <ProdutTableHeader />
        <ProdutTableBody
            products={products}
            onQuantityClick={onQuantityClick}
            onDelete={onDelete}
        />
    </div>
);

ProdutTable.propTypes = {
    products: productPropertytypes.isRequired,
    onQuantityClick: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ProdutTable;
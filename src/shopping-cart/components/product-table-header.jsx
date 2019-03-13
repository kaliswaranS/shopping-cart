import React from 'react';
import _ from 'lodash';

import HEADERS from '../constants/product-table-headers';

const generateHeader = (row) => {
    const { className, name } = row;
    return (
        <div className={`product-table__column product-table__column--${className}`}>
            {name}
        </div>
    );
};

const ProdutTableHeader = () => (
    <div className="product-table__header">
        <div className="product-table__row">
            {_.map(HEADERS, generateHeader)}
        </div>
    </div>
);

export default ProdutTableHeader;
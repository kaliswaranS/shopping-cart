import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ onChange, value, placeholder, type, name, maxLength }) => (
    <input
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
    />
);

TextBox.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType(
        PropTypes.number,
        PropTypes.string,
    ),
    type: PropTypes.string,
    maxLength: PropTypes.string,
};

TextBox.defaultTypes = {
    value: '',
    placeholder: '',
    type: 'text',
    maxLength: 30,
};

export default TextBox;
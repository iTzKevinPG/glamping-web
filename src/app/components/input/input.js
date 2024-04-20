import PropTypes from 'prop-types';
import React from 'react';
import './input.scss';

const Input = ({ type, value, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`input ${className}`}
    />
  );
};

Input.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'number',
    'password',
    'email',
    'tel',
    'url',
    'search',
    'date',
    'datetime-local',
    'month',
    'week',
    'time',
    'range',
    'color',
  ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  className: '',
};

export default Input;

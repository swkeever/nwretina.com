import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({
  label,
  name,
  validation,
  ...rest
}) => {
  const [value, setValue] = useState('');
  const isValid = validation.isValid(value);

  return (
    <div className="field">
      <label htmlFor={name} className="label">
        {label}
        <div className="control has-icons-right">
          <input
            className={`input ${isValid ? 'is-primary' : 'is-danger'}`}
            id={name}
            name={name}
            value={value}
            onChange={({ target }) => setValue(target.value)}
            required
            {...rest}
          />
          {
            isValid
            && (
            <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span>
            )
          }

        </div>
      </label>
      {
      isValid
        ? (
          <p className="help is-primary">
            {validation.success}
          </p>
        )
        : (
          <p className="help is-danger">
            {validation.error}
          </p>
        )
      }
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  validation: PropTypes.shape({
    isValid: PropTypes.func.isRequired,
    success: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
  }).isRequired,
};

export default Input;

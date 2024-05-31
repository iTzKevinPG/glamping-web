import React from 'react';
import './inputCheck.scss';
function InputCheckOption({ label, iconUrl, isChecked, onCheck, textColor }) {
  return (
    <div className="check-option-container">
      <input
        type="radio"
        checked={isChecked}
        onChange={onCheck}
        className="check-option-container__radio-button"
      />
      <div className="check-option-container__content">
        <span
          className="check-option-container__content--label"
          style={{ color: textColor }}
        >
          {label}
        </span>
        <img
          src={iconUrl}
          alt={label}
          className="check-option-container__content--icon"
        />
      </div>
    </div>
  );
}

export default InputCheckOption;

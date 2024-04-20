import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon-svg/icon';

const Button = ({ text, mode, color, textColor, iconName, onClick }) => {
  const isOutlineMode = mode === 'outline';

  const styles = {
    backgroundColor: isOutlineMode ? 'transparent' : color,
    color: textColor,
    border: isOutlineMode ? `2px solid ${color}` : 'none',
    borderRadius: '2rem',
    padding: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  return (
    <button className="button" style={styles} onClick={onClick}>
      {iconName && (
        <Icon
          name={iconName}
          size={{ width: '1.2rem', height: '1.2rem' }}
          color={textColor}
        />
      )}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['outline', 'fill']),
  color: PropTypes.string,
  textColor: PropTypes.string,
  iconName: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  mode: 'fill',
  color: '#1E7F7F',
  textColor: '#ffffff',
  onClick: () => {},
};

export default Button;

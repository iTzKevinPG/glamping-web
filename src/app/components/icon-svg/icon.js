import PropTypes from 'prop-types';
import React from 'react';

const Icon = ({ name, size, color }) => {
  const iconName = `/assets/icons/${name}.svg`;

  const styles = {
    width: size.width,
    height: size.height,
    mask: `center center no-repeat`,
    maskImage: `url(${iconName})`,
    WebkitMaskImage: `url(${iconName})`,
    maskSize: 'contain',
    backgroundColor: color,
  };

  return <div className="icon-container" style={styles}></div>;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: {
    width: '1rem',
    height: '1rem',
  },
  color: '#fff',
};

export default Icon;

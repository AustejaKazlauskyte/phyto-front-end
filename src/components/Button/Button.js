import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, type, ...other }) => (
  <button className="button-primary" {...other} type={type || 'button'}>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string])
    .isRequired,
  type: PropTypes.string,
}

export default Button

import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.css'

const Button = ({ children, primary, type, ...other }) => (
  <button
    className={`${styles.button} ${primary ? styles.buttonPrimary : ''}`}
    {...other}
    type={type || 'button'}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string])
    .isRequired,
  primary: PropTypes.bool,
  type: PropTypes.string,
}

export default Button

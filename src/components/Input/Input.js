import React from 'react'
import PropTypes from 'prop-types'

import styles from './Input.module.css'

const Input = ({ id, label, type, ...other }) => (
  <>
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>
    <input
      id={id}
      className={`${styles.input} u-full-width`}
      type={type || 'text'}
      {...other}
    />
  </>
)

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default Input

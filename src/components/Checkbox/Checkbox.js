import React from 'react'
import PropTypes from 'prop-types'

import styles from './Checkbox.module.css'

const Checkbox = ({ id, label, ...other }) => (
  <div className={styles.contentBox}>
    <div className={styles.inputBox}>
      <input id={id} className={styles.checkbox} type="checkbox" {...other} />
    </div>
    <label htmlFor={id}>{label}</label>
  </div>
)

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Checkbox

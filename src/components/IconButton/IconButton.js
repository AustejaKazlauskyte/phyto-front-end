import React from 'react'
import PropTypes from 'prop-types'

import styles from './IconButton.module.css'

const IconButton = ({ icon, onClick, val, ...other }) => {
  const clickHandler = () => onClick(val)

  return (
    <button
      className={styles.button}
      onClick={clickHandler}
      {...other}
      type="button"
    >
      <i className={icon} />
    </button>
  )
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  val: PropTypes.any.isRequired,
}

export default IconButton

import React from 'react'
import PropTypes from 'prop-types'
import { Link as InternalLink } from 'react-router-dom'

import styles from './Link.module.css'

const Link = ({ to, text }) => (
  <InternalLink className={styles.link} to={to}>
    {text}
  </InternalLink>
)

Link.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default Link

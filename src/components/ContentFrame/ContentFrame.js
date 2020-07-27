import React from 'react'
import PropTypes from 'prop-types'

import styles from './ContentFrame.module.css'

const ContentFrame = ({ children }) => (
  <div className={styles.contentFrame}>{children}</div>
)

ContentFrame.propTypes = {
  children: PropTypes.elementType.isRequired,
}

export default ContentFrame

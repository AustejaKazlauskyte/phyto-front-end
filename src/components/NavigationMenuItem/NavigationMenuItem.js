import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import styles from './NavigationMenuItem.module.css'

const NavigationMenuItem = ({ href, text }) => (
  <li className={styles.navbarItem}>
    <NavLink className={styles.navbarLink} to={href}>
      {text}
    </NavLink>
  </li>
)

NavigationMenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default NavigationMenuItem

import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import './NavigationLink.css'

const NavigationLink = ({ href, text }) => (
  <li className="navbar-item">
    <NavLink className="navbar-link" to={href}>
      {text}
    </NavLink>
  </li>
)

NavigationLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default NavigationLink

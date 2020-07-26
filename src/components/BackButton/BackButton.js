import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const BackButton = ({ to, text }) => <NavLink to={to}>{text}</NavLink>

BackButton.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default BackButton

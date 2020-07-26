import React from 'react'
import PropTypes from 'prop-types'

import NavigationLink from 'components/NavigationLink/NavigationLink'
import Button from 'components/Button/Button'

import './NavigationMenu.css'

const NavigationMenu = ({ items, logout }) => (
  <nav className="navbar">
    <ul className="navbar-list">
      {items.map(({ href, text }) => (
        <NavigationLink key={href} href={href} text={text} />
      ))}
    </ul>
    {logout && (
      <Button className="navbar-list-logout" onClick={logout}>
        Atsijungti
      </Button>
    )}
  </nav>
)

NavigationMenu.propTypes = {
  items: PropTypes.array.isRequired,
  logout: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
}

export default NavigationMenu

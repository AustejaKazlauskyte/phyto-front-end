import React from 'react'
import PropTypes from 'prop-types'

import NavigationLink from 'components/NavigationLink/NavigationLink'
import Button from 'components/Button/Button'

import styles from './NavigationMenu.module.css'

const NavigationMenu = ({ items, logout }) => (
  <nav className={styles.navbar}>
    <ul className={styles.navbarList}>
      {items.map(({ href, text }) => (
        <NavigationLink key={href} href={href} text={text} />
      ))}
    </ul>
    {logout && (
      <div className={styles.logoutSection}>
        <Button onClick={logout}>Atsijungti</Button>
      </div>
    )}
  </nav>
)

NavigationMenu.propTypes = {
  items: PropTypes.array.isRequired,
  logout: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
}

export default NavigationMenu

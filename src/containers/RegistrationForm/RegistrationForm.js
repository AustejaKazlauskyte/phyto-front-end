import React from 'react'

import Button from 'components/Button/Button'

function RegistrationForm() {
  return (
    <div className="container" style={{ margin: '50% auto 20%' }}>
      <form>
        <h3>Registracija</h3>
        <label htmlFor="email">Prisijungimo vardas</label>
        <input
          id="email"
          className="u-full-width"
          type="text"
          /* value={userName}
                    onChange={e => {
                        setUserName(e.target.value);
                    }} */
          placeholder="pvz., jonas@pastodezute.lt"
        />
        <label htmlFor="password">Slaptažodis</label>
        <input
          id="password"
          className="u-full-width"
          type="password"
          placeholder="slaptažodis"
        />
        <Button primary type="submit">
          Registruotis
        </Button>
      </form>
    </div>
  )
}

export default RegistrationForm

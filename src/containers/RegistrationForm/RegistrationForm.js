import React from 'react'

import Button from 'components/Button/Button'
import Input from 'components/Input/Input'

function RegistrationForm() {
  return (
    <div className="container" style={{ margin: '50% auto 20%' }}>
      <form>
        <h3>Registracija</h3>
        <Input
          id="email"
          label="Prisijungimo vardas"
          placeholder="pvz., jonas@pastodezute.lt"
          type="email"
        />
        <Input
          id="password"
          label="Slaptažodis"
          placeholder="slaptažodis"
          type="password"
        />
        <Button primary>Registruotis</Button>
      </form>
    </div>
  )
}

export default RegistrationForm

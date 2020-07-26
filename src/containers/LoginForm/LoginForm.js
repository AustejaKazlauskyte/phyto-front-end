import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import { useAuth } from 'hooks/Auth/Auth'
import Button from 'components/Button/Button'
import Input from 'components/Input/Input'

function LoginForm() {
  const [isError, setIsError] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { isAuthenticated, setToken } = useAuth()

  const login = (event) => {
    event.preventDefault()
    axios
      .post('http://localhost:8080/login', {
        email,
        password,
      })
      .then((result) => {
        if (result.status === 200) {
          setToken(result.data.token)
        } else {
          setIsError(true)
        }
      })
      .catch(() => {
        setIsError(true)
      })
  }

  const handleChangeEmail = ({ target: { value } }) => setEmail(value)

  const handleChangePassword = ({ target: { value } }) => setPassword(value)

  return isAuthenticated() ? (
    <Redirect to="/herbs" />
  ) : (
    <div className="container" style={{ margin: '50% auto 20%' }}>
      <form onSubmit={login}>
        <h3>Sveiki užsukę</h3>
        <Input
          id="email"
          onChange={handleChangeEmail}
          label="Prisijungimo vardas"
          placeholder="pvz., jonas@pastodezute.lt"
          type="email"
        />
        <Input
          id="password"
          onChange={handleChangePassword}
          label="Slaptažodis"
          placeholder="slaptažodis"
          type="password"
        />
        <Button primary type="submit">
          Prisijungti
        </Button>
      </form>
      {isError && <p>Pateikėte neteisingą informaciją</p>}
    </div>
  )
}

export default LoginForm

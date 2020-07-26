import React from 'react'

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
        <button
          className="button-primary"
          type="submit"
          /* onClick={postLogin} */
        >
          Prisijungti{' '}
        </button>
      </form>
    </div>
  )
}

export default RegistrationForm

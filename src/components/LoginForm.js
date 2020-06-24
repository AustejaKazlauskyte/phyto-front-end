import React from "react"

function LoginForm() {
    return (
        <form>
            <label><h3>Sveiki užsukę</h3></label>
            <label>Prisijungimo vardas</label>
            <input className="u-full-width" type="text" placeholder="pavyzdžiui, Jonas"/>
            <label>Elektroninio pašto adresas</label>
            <input className="u-full-width" type="email" placeholder="tavo@pastodezute.lt"/>
            <input className="button-primary" type="submit" value="Prisijungti"/>
        </form>
    )
}

export default LoginForm;

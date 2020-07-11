import React from "react"

function RegistrationForm() {
    return (
        <div className="container" style={{margin: "50% auto 20%"}}>
            <form>
                <label><h3>Registracija</h3></label>
                <label>Prisijungimo vardas</label>
                <input className="u-full-width" type="text" placeholder="pavyzdžiui, Jonas"/>
                <label>Elektroninio pašto adresas</label>
                <input className="u-full-width" type="email" placeholder="tavo@pastodezute.lt"/>
                <input className="button-primary" type="submit" value="Registruotis"/>
            </form>
        </div>
    )
}

export default RegistrationForm;

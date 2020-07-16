import React from "react"

function RegistrationForm() {
    return (
        <div className="container" style={{margin: "50% auto 20%"}}>
            <form>
                <label><h3>Registracija</h3></label>
                <label>Prisijungimo vardas</label>
                <input
                    className="u-full-width"
                    type="text"
                   /* value={userName}
                    onChange={e => {
                        setUserName(e.target.value);
                    }}*/
                    placeholder="pvz., jonas@pastodezute.lt"/>
                <label>Slaptažodis</label>
                <input
                    className="u-full-width"
                    type="password"
                    placeholder="slaptažodis"/>
                <button
                    className="button-primary"
                    /*onClick={postLogin}*/>Prisijungti </button>
            </form>
        </div>
    )
}

export default RegistrationForm;

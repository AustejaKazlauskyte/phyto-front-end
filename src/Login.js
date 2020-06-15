import React from "react"

function Login() {
    return(
        <div>
            <img className="wave" src="wave.png"/>
            <div className="container">
                <div className="img">
                    {/*<img src="plants.svg"/>*/}
                    <img src="standing-11.svg"/>
                </div>
                <div className="login-content">
                    <form action="index.html">
                        <div className="avatar-transform">
                            <img src="Curly.svg"/>
                        </div>
                        <h2 className="title">Sveiki užsukę</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <h5>Prisijungimo vardas</h5>
                                <input type="text" className="input"/>
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Slaptažodis</h5>
                                <input type="password" className="input"/>
                            </div>
                        </div>
                        <a href="#">Pamiršote slaptažodį?</a>
                        <input type="submit" className="btn" value="Prisijunkite"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;

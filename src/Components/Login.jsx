import React from "react";

const Login = (props) => {
    return (
        <div className="login-container">
            <h1 className="welcome-message">Welcome to BaseVote✅</h1>
            <h2 className="welcome-message">Decentralized Voting Application Build On Base</h2>
            <button className="login-button" onClick = {props.connectWallet}>Connect Wallet</button>
        </div>
    )
}

export default Login;
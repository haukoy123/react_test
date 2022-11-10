import React, { useState} from "react";
// import {User, isLoggedIn} from "./UseContext";



// code linh linh
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            logout
        </button>
    )
}

function Greeting (props) {
    if (props.isLoggedIn) {
        return (
            <div>
                <h1>Welcome back!</h1>
                <LogoutButton onClick={props.onClick}/>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Please sign up.</h1>
                <LoginButton onClick={props.onClick}/>
            </div>
        )
    }
}

function TestAuth(props) {
    const [isUser, setStatus] = useState(false);

    function handleLoginClick() {
        setStatus(true);
    }

    function handleLogoutClick() {
        setStatus(false);
    }
    if (isUser) {
        return <Greeting isLoggedIn={isUser} onClick={handleLogoutClick} />
    } else {
        return <Greeting isLoggedIn={isUser} onClick={handleLoginClick} />
    }
}


export default TestAuth;
// React
import React, { useState, useEffect } from 'react'
// API
import API from '../../utils/API'
// Components
import SignInForm from '../../components/SignInForm'


export default function SignInPage() {
    const [signInState, setSignInState] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = event => {
        event.preventDefault();
        const { name, value } = event.target
        setSignInState({
            ...signInState,
            [name]: value
        })
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        if (!signInState.email || !signInState.password) {
            alert("Incorrect email/password, please try again.");
        } else {
            API.signIn(signInState).then(newToken => {
                if (newToken === null) {
                    alert("Incorrect email/password, please try again.");
                } else {
                    localStorage.setItem("token", newToken.token);
                    API.getProfile(newToken.token).then(window.location.href = '/')
                };
            })
        };
    };

    return (
        <div>
            <SignInForm
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
        </div>
    )
}

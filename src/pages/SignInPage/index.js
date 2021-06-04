// React
import React, { useState, } from 'react'
// API
import API from '../../utils/API'
// Components
import SignInForm from '../../components/SignInForm'

export default function SignInPage() {
    const [signInState, setSignInState] = useState({
        email: "",
        password: ""
    });

    const [open, setOpen] = useState({
        success: false,
        error: false
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            setOpen({
                success: false,
                error: false
            });
            return;
        }
        setOpen({
            success: false,
            error: false
        });
    };

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
            setOpen({
                ...open,
                error: true
            })
        } else {
            API.signIn(signInState).then(newToken => {
                if (newToken === null) {
                    setOpen({
                        ...open,
                        error: true
                    })

                } else {
                    localStorage.setItem("token", newToken.token);
                    API.getProfile(newToken.token).then(window.location.href = '/')
                };
            })
        };
    };

    return (
        <div className="content">
            <SignInForm
                open={open}
                handleClose={handleClose}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
        </div>
    )
}

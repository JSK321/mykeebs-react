import React, { useState, useEffect } from 'react'
import SignUpForm from '../../components/SignUpForm'
import API from '../../utils/API'

export default function RegisterPage() {
    const [userState, setUserState] = useState({
        email: "",
        password: "",
        name: ""
    })

    const handleInputChange = event => {
        const { name, value } = event.target
        setUserState({
            ...userState,
            [name]: value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        userCreateandSignIn()
    }

    function userSignIn() {
        API.signIn(userState).then(newToken => {
            localStorage.setItem('token', newToken.token)
            API.getProfile(newToken.token).then(res => {
                window.location.href = '/'
            })
        })
    }

    async function userCreateandSignIn() {
        const createUser = await API.createUser(userState)
        await userSignIn(createUser)
    }

    return (
        <div className="content">
            <div className="Register">
                <SignUpForm
                    handleInputChange={handleInputChange}
                    handleFormSubmit={handleFormSubmit}
                    email={userState.email}
                    password={userState.password}
                    name={userState.name}
                />
            </div>
        </div>
    )
}

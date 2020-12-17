import React, { useState, useEffect } from 'react'
import SignUpForm from '../../components/SignUpForm'
import API from '../../utils/API'

export default function Register() {
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
        try {
            API.createUser(userState).then(userData => {})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="Register">
            <SignUpForm
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                email={userState.email}
                password={userState.password}
                name={userState.name}
            />
        </div>
    )
}

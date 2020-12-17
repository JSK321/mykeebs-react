import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AddKeebForm from '../../components/AddKeebForm'
import API from '../../utils/API'

export default function Keebs(props) {
    const [keebFormState, setKeebFormState] = useState({
        name: "",
        size: "",
        maker: "",
        case: "",
        color: "",
        plate: ""
    })

    const [userProfile, setUserProfile] = useState({})

    const { id } = useParams()

    useEffect(() => {
        const token = localStorage.getItem('token')
        API.getProfile(token).then(keebData => {
            if (keebData) {
                setUserProfile({
                    name: keebData.name,
                    email: keebData.email,
                    keebs: keebData.Keebs,
                    token: token,
                    isLoggedIn: true
                })
            } else {
                localStorage.removeItem("token");
                setUserProfile({
                    name: "",
                    email: "",
                    keebs: [],
                    parts: [],
                    token: "",
                    isLoggedIn: false
                })
            }
        })
    }, [])


    const handleInputChange = event => {
        const { name, value } = event.target
        setKeebFormState({
            ...keebFormState,
            [name]: value
        })
    }

    const handleSelectSize = event => {
        let size = event.target.value
        setKeebFormState({
            ...keebFormState,
            size: size
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        API.createKeeb(props.profile.token, {
            ...keebFormState,
            UserId: id
        }).then(data => {
            const token = localStorage.getItem('token')
            API.getProfile(token).then(keebData => {
                if (keebData) {
                    setUserProfile({
                        name: keebData.name,
                        email: keebData.email,
                        keebs: keebData.Keebs,
                        token: token,
                        isLoggedIn: true
                    })
                    window.location.href="/addpartsform"
                } else {
                    localStorage.removeItem("token");
                    setUserProfile({
                        name: "",
                        email: "",
                        keebs: [],
                        parts: [],
                        token: "",
                        isLoggedIn: false
                    })
                }
            })
        })
    }

    return (
        <AddKeebForm
            handleInputChange={handleInputChange}
            handleSelectSize={handleSelectSize}
            handleFormSubmit={handleFormSubmit}
            name={keebFormState.name}
            size={keebFormState.size}
            maker={keebFormState.maker}
            case={keebFormState.case}
            color={keebFormState.color}
            plate={keebFormState.plate}
        />
    )
}

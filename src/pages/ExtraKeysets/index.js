import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AddExtraKeysetForm from '../../components/AddExtraKeysetForm'
import API from '../../utils/API'

export default function ExtraKeysets(props) {
    const [addExtraKeyetState, setAddExtraKeysetState] = useState({
        keyset: "",
        kits: "",
        type: "",
        material:"",
        profile: ""
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
        setAddExtraKeysetState({
            ...addExtraKeyetState,
            [name]: value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        API.createAddKeysets(props.profile.token, {
            ...addExtraKeyetState,
            UserId: id
        }).then(data => {
            window.location.href="/profile"
        })
    }

    return (
        <div className="ExtraKeysets">
            <AddExtraKeysetForm
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                keyset={addExtraKeyetState.keyset}
                kits={addExtraKeyetState.kits}
                type={addExtraKeyetState.type}
                material={addExtraKeyetState.maker}
                profile={addExtraKeyetState.profile}
            />
        </div>
    )
}

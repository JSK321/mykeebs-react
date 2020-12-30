import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UserProfile from '../../components/UserProfile'
import API from '../../utils/API'

export default function Profile(props) {
    const [userProfile, setUserProfile] = useState({
        email: "",
        name: "",
        password: "",
    })

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
                    token: "",
                    isLoggedIn: false
                })
            }
        })
    }, [])

    return (
        <UserProfile
            name={userProfile.name}
            email={userProfile.email}
            id={props.profile.id}
        />
    )
}

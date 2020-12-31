import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UpdateProfileForm from '../../components/UpdateProfileForm'
import API from '../../utils/API'

export default function UpdateProfile() {
    const [userProfile, setUserProfile] = useState({
        name: "",
        email: "",
        token: "",
        id: "",
        profileImage:""
    })

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        API.getProfile(token).then(keebData => {
            if (keebData) {
                setUserProfile({
                    name: keebData.name,
                    email: keebData.email,
                    token: token,
                    id: keebData.id,
                    isLoggedIn: true
                })
            } else {
                localStorage.removeItem("token");
                setUserProfile({
                    name: "",
                    email: "",
                    token: "",
                    id: "",
                    isLoggedIn: false
                })
            }
        })
    }, [])

    const handleInputChange = event => {
        const { name, value } = event.target
        setUserProfile({
            ...userProfile,
            [name]: value
        })
    }

    // Cloudinary Functions
    const handleImageUploadBtn = event => {
        event.preventDefault()
        document.getElementById('image').click()
    }

    const handleUploadImage = async event => {
        const files = event.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'keebs_setups')
        setLoading(true)
        const res = await API.uploadImage(data)
        const file = await res.json()
        setUserProfile({
            ...userProfile,
            profileImage: file.secure_url
        })
        setLoading(false)
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        API.updateUser(
            userProfile.id,
            userProfile.token,
            userProfile.name,
            userProfile.email,
            userProfile.password
        ).then(userData => {
            setUserProfile({
                ...userProfile,
                name: userData.name,
                email: userData.email,
                password: userData.password
            })
        })

    }

    return (
        <div>
            <UpdateProfileForm
                handleInputChange={handleInputChange}
                handleImageUploadBtn={handleImageUploadBtn}
                handleUploadImage={handleUploadImage}
                handleFormSubmit={handleFormSubmit}
                name={userProfile.name}
                email={userProfile.email}
            />
        </div>
    )
}

// React
import React, { useState, useEffect } from 'react'
// API
import API from '../../utils/API'
// Components
import UpdateProfileForm from '../../components/UpdateProfileForm'

export default function UpdateProfile() {
    const [userProfile, setUserProfile] = useState({
        id: "",
        token:"",
        name: "",
        email: "",
        password: "",
        image: ""
    })
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        API.getProfile(token).then(profileData => {
            if (profileData) {
                setUserProfile({
                    id: profileData.id,
                    token: token,
                    name: profileData.name,
                    email: profileData.email,
                    image: profileData.profileImage,
                })
            } else {
                localStorage.removeItem("token");
                setUserProfile({
                    name: "",
                    email: "",
                    password: "",
                    image: ""
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

    const handleDeleteProfile = event => {
        event.preventDefault()
        let confirmAlert = window.confirm("Are you certain to delete profile?")
        if (confirmAlert === true) {
            API.deleteUser(userProfile.token, userProfile.id)
        }
    }

    // Cloudinary Functions
    const handleImageUploadBtn = event => {
        event.preventDefault()
        document.getElementById('icon-button-file').click()
    }

    const handleUploadImage = async event => {
        const files = event.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'keebs_setups')
        setLoading(true)
        const res = await API.uploadImage(data)
        const file = await res
        setUserProfile({
            ...userProfile,
            image: file.secure_url
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
            userProfile.password,
            userProfile.profileImage
        ).then(userData => {
            window.location.href='/profile'
        })

    }

    return (
        <div>
            <UpdateProfileForm
                handleInputChange={handleInputChange}
                handleImageUploadBtn={handleImageUploadBtn}
                handleUploadImage={handleUploadImage}
                handleDeleteProfile={handleDeleteProfile}
                handleFormSubmit={handleFormSubmit}
                name={userProfile.name}
                email={userProfile.email}
                image={userProfile.image}
                loading={loading}
            />
        </div>
    )
}

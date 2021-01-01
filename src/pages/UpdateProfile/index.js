import React, { useState, useEffect } from 'react'
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
        API.getProfile(token).then(profileData => {
            if (profileData) {
                setUserProfile({
                    name: profileData.name,
                    email: profileData.email,
                    token: token,
                    id: profileData.id,
                    profileImage: profileData.profileImage,
                    isLoggedIn: true
                })
            } else {
                localStorage.removeItem("token");
                setUserProfile({
                    name: "",
                    email: "",
                    token: "",
                    id: "",
                    profileImage: "",
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

    const handleDeleteProfile = event => {
        event.preventDefault()
        let confirmAlert = window.confirm("Are you certain to delete profile?")
        if(confirmAlert === true){
            API.deleteUser(userProfile.token, userProfile.id)
        }
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
            userProfile.password,
            userProfile.profileImage
        ).then(userData => {
            setUserProfile({
                ...userProfile,
                name: userProfile.name,
                email: userProfile.email,
                password: userProfile.password,
                profileImage: userProfile.profileImage
            })
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
                profileImage={userProfile.profileImage}
                loading={loading}
            />
        </div>
    )
}

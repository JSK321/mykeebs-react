// React
import React, { useState, useEffect } from 'react'
// API
import API from '../../utils/API'
// Components
import UpdateProfileForm from '../../components/UpdateProfileForm'
import SnackbarAlert from '../../components/SnackbarAlert'

export default function UpdateProfile() {
    const [userProfile, setUserProfile] = useState({
        id: "",
        token: "",
        name: "",
        email: "",
        password: "",
        image: ""
    })
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState({
        profile: false,
        profileConfirm: false
    });

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

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            setOpen({
                profile: false,
                profileConfirm: false
            });
            window.location.href = '/profile'
        }
        setOpen({
            profile: false,
            profileConfirm: false
        });
        window.location.href = '/profile'
    };

    const handleConfirm = event => {
        event.preventDefault()
        API.deleteUser(userProfile.token, userProfile.id).then(res => {
            setOpen({
                ...open,
                profileConfirm: false,
            })
        })
    }

    const handleCloseConfirm = (event, reason) => {
        if (reason === 'clickaway') {
            setOpen({
                ...open,
                profileConfirm: false,
            })
        }
        setOpen({
            ...open,
            profileConfirm: false,
        })
    }

    const handleInputChange = event => {
        const { name, value } = event.target
        setUserProfile({
            ...userProfile,
            [name]: value
        })
    }

    const handleDeleteProfile = event => {
        event.preventDefault()
        setOpen({
            ...open,
            profileConfirm: true
        })
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
            userProfile.image
        ).then(userData => {
            setOpen({ profile: true })
        })

    }

    return (
        <div className="content">
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
            <SnackbarAlert
                open={open}
                handleClose={handleClose}
                handleConfirm={handleConfirm}
                handleCloseConfirm={handleCloseConfirm}
            />
        </div>
    )
}

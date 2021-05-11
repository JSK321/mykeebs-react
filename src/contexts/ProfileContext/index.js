// React
import React, { useContext, useState, } from 'react'
// API
import API from '../../utils/API'

const ProfileContext = React.createContext()
const ProfileData = React.createContext()

export function useProfile() {
    return useContext(ProfileContext)
}

export function useProfileData() {
    return useContext(ProfileData)
}

export function ProfileProvider({ children }) {
    const [profileState, setProfileState] = useState(null)

    function fetchProfileData() {
        const token = localStorage.getItem('token')
        if (token !== null) {
            API.getProfile(token).then(profileData => {
                if (profileData) {
                    setProfileState({
                        name: profileData.name,
                        email: profileData.email,
                        keebs: profileData.Keebs,
                        keysets: profileData.Extras,
                        token: token,
                        profileImage: profileData.profileImage,
                        id: profileData.id,
                        isLoggedIn: true
                    })
                    return
                } else {
                    localStorage.removeItem('token')
                    setProfileState({
                        name: "",
                        email: "",
                        keebs: [],
                        token: "",
                        profileImage: "",
                        id: "",
                        isLoggedIn: false
                    })
                }
            })
        }
    }

    return (
        <ProfileContext.Provider value={profileState}>
            <ProfileData.Provider value={fetchProfileData}>
                {children}
            </ProfileData.Provider>
        </ProfileContext.Provider>
    )
}

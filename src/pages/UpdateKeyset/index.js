import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import KeysetUpdateCard from '../../components/KeysetUpdateForm'
import API from "../../utils/API"

export default function UpdateKeyset(props) {

    const [keysetState, setKeysetState] = useState({
        keyset: "",
        kits: "",
        material: "",
        type: "",
        profile: "",
        keysetImage: ""
    })
    const [userProfile, setUserProfile] = useState({})
    const [keysetImageState, setKeysetImageState] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const token = localStorage.getItem('token')
        API.getProfile(token).then(keebData => {
            if (keebData) {
                setUserProfile({
                    name: keebData.name,
                    email: keebData.email,
                    keebs: keebData.Keebs,
                    keyset: keebData.Extras,
                    token: token,
                    isLoggedIn: true
                })
            } else {
                localStorage.removeItem("token");
                setUserProfile({
                    name: "",
                    email: "",
                    keebs: [],
                    keysets: [],
                    token: "",
                    isLoggedIn: false
                })
            }
        })
        loadKeyset()
    }, [])

    function loadKeyset() {
        API.getOneKeyset(id).then(keysets => {
            if (keysets) {
                setKeysetState({
                    id: keysets.id,
                    keyset: keysets.keyset,
                    kits: keysets.kits,
                    material: keysets.material,
                    type: keysets.type,
                    profile: keysets.profile,
                    keysetImage: keysets.keysetImage
                })
            } else {
                setKeysetState({
                    id: "",
                    keyset: "",
                    kits: "",
                    material: "",
                    type: "",
                    profile: "",
                    keysetImage: ""
                })
            }
        })
    }

    const handleInputChange = event => {
        const { name, value } = event.target
        setKeysetState({
            ...keysetState,
            [name]: value
        })
        if (value === "") {
            loadKeyset()
        }
    }

    const handleDeleteKeyset = event => {
        event.preventDefault()
        let confirmAlert = window.confirm("Are you certain to remove keyset?")
        if (confirmAlert === true) {
            API.deleteKeyset(userProfile.token, id)
        }
    }

    // // Cloudinary Functions
    const handleImageUploadBtn = event => {
        event.preventDefault()
        document.getElementById('image').click()
    }

    const handleUploadImage = async event => {
        const files = event.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'keebs_setups')
        setKeysetImageState(true)
        const res = await API.uploadImage(data)
        const file = await res.json()
        setKeysetState({
            ...keysetState,
            keysetImage: file.secure_url
        })
        setKeysetImageState(false)
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        API.updateKeyset(
            id,
            userProfile.token,
            keysetState.keyset,
            keysetState.kits,
            keysetState.material,
            keysetState.type,
            keysetState.profile,
            keysetState.keysetImage
        ).then(updateData => {
            setKeysetState({
                ...keysetState,
                keyset: keysetState.keyset,
                kits: keysetState.kits,
                material: keysetState.material,
                type: keysetState.type,
                profile: keysetState.profile,
                keysetImage: keysetState.keysetImage
            })
        })
    }
    return (
        <div>
            <KeysetUpdateCard
                handleInputChange={handleInputChange}
                handleUploadImage={handleUploadImage}
                handleImageUploadBtn={handleImageUploadBtn}
                handleFormSubmit={handleFormSubmit}
                handleDeleteKeyset={handleDeleteKeyset}
                loading={keysetImageState}
                keyset={keysetState.keyset}
                kits={keysetState.kits}
                material={keysetState.material}
                type={keysetState.type}
                profile={keysetState.profile}
                keysetImage={keysetState.keysetImage}
            />
        </div>
    )
}

// React
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// API
import API from "../../utils/API"
// Components
import KeebUpdateForm from '../../components/KeebUpdateForm'
// Context
import { useProfile, useProfileData } from '../../contexts/ProfileContext'

export default function KeebUpdatePage() {
    // Profile Context
    const profile = useProfile()
    const profileData = useProfileData()

    const [updateKeeb, setUpdateKeeb] = useState({
        keebId: "",
        name: "",
        maker: "",
        color: "",
        plate: "",
        keebImage: "",
        switches: "",
        switchLube: "",
        springWeight: "",
        springLube: "",
        switchFilm: "",
        stabs: "",
        stabLube: "",
        keyset: ""
    })

    const [loading, setLoading] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        profileData()
        loadKeeb()
    }, [])

    function loadKeeb() {
        API.getOneKeeb(id).then(keebData => {
            if (keebData) {
                setUpdateKeeb({
                    keebId: id,
                    name: keebData.name,
                    maker: keebData.maker,
                    color: keebData.color,
                    plate: keebData.plate,
                    keebImage: keebData.keebImage,
                    switches: keebData.Parts[0].switches,
                    switchLube: keebData.Parts[0].switchLube,
                    springWeight: keebData.Parts[0].springWeight,
                    springLube: keebData.Parts[0].springLube,
                    switchFilm: keebData.Parts[0].switchFilm,
                    stabs: keebData.Parts[0].stabs,
                    stabLube: keebData.Parts[0].stabLube,
                    keyset: keebData.Parts[0].keyset
                })
            }
        })
    }

    const handleInputChange = event => {
        const { name, value } = event.target
        setUpdateKeeb({
            ...updateKeeb,
            [name]: value
        })
    }

    const handleDeleteKeeb = event => {
        event.preventDefault()
        let confirmAlert = window.confirm(`Are you sure to delete ${updateKeeb.name}`)
        if (confirmAlert === true) {
            API.deleteParts(profile.token, id)
            API.deleteKeeb(profile.token, id)
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
        setUpdateKeeb({
            ...updateKeeb,
            keebImage: file.secure_url
        })
        setLoading(false)
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        API.updateKeeb(
            id,
            profile.token,
            updateKeeb.color,
            updateKeeb.plate,
            updateKeeb.keebImage
        ).then(updateData => {
            setUpdateKeeb({
                ...updateKeeb,
                color: updateKeeb.color,
                plate: updateKeeb.plate,
                keebImage: updateKeeb.keebImage
            })
        })

        API.updateParts(
            id,
            profile.token,
            updateKeeb.switches,
            updateKeeb.switchLube,
            updateKeeb.springWeight,
            updateKeeb.springLube,
            updateKeeb.switchFilm,
            updateKeeb.stabs,
            updateKeeb.stabLube,
            updateKeeb.keyset
        ).then(updateData => {
            setUpdateKeeb({
                ...updateKeeb,
                switches: updateKeeb.switches,
                switchLube: updateKeeb.switchLube,
                springWeight: updateKeeb.springWeight,
                springLube: updateKeeb.springLube,
                switchFilm: updateKeeb.switchFilm,
                stabs: updateKeeb.stabs,
                stabLube: updateKeeb.stabLube,
                keyset: updateKeeb.keyset
            })
        }).then(res => {
            window.location.href='/profile'
        })
    }

    return (
        <div className="content">
            <KeebUpdateForm
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                handleDeleteKeeb={handleDeleteKeeb}
                handleImageUploadBtn={handleImageUploadBtn}
                handleUploadImage={handleUploadImage}
                keebImage={updateKeeb.keebImage}
                keebId={updateKeeb.keebId}
                name={updateKeeb.name}
                maker={updateKeeb.maker}
                color={updateKeeb.color}
                plate={updateKeeb.plate}
                switches={updateKeeb.switches}
                switchLube={updateKeeb.switchLube}
                springWeight={updateKeeb.springWeight}
                springLube={updateKeeb.springLube}
                switchFilm={updateKeeb.switchFilm}
                stabs={updateKeeb.stabs}
                stabLube={updateKeeb.stabLube}
                keyset={updateKeeb.keyset}
                loading={loading}
            />
        </div>
    )
}

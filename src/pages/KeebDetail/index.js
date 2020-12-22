import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from "../../utils/API"
import KeebUpdateCard from '../../components/KeebUpdateCard'

export default function KeebDetail(props) {
    const [updateKeeb, setUpdateKeeb] = useState({
        keebId: "",
        name:"",
        maker:"",
        color: "",
        plate: "",
        keebImage: ""
    })

    const [updateParts, setUpdateParts] = useState({
        switches: "",
        switchLube: "",
        springWeight: "",
        springLube: "",
        switchFilm: "",
        stabs: "",
        stabLube: "",
        keyset: ""
    })

    const [userProfile, setUserProfile] = useState({})

    const [loading, setLoading] = useState(false)

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
        loadKeeb()
    }, [])

    function loadKeeb() {
        API.getOneKeeb(id).then(keebData => {
            setUpdateKeeb({
                keebId: id,
                name: keebData.name,
                maker: keebData.maker,
                color: keebData.color,
                plate: keebData.plate,
                keebImage: keebData.keebImage
            })

        })
        API.getOneParts(id).then(partsData => {
            setUpdateParts({
                switches: partsData.switches,
                switchLube: partsData.switchLube,
                springWeight: partsData.springWeight,
                springLube: partsData.springLube,
                switchFilm: partsData.switchFilm,
                stabs: partsData.stabs,
                stabLube: partsData.stabLube,
                keyset: partsData.keyset
            })
        })
    }

    const handleKeebInputChange = event => {
        const { name, value } = event.target
        setUpdateKeeb({
            ...updateKeeb,
            [name]: value
        })
        if (value === "") {
            loadKeeb()
        }
    }
    const handlePartsInputChange = event => {
        const { name, value } = event.target
        setUpdateParts({
            ...updateParts,
            [name]: value
        })
        if (value === "") {
            loadKeeb()
        }
    }

    const handleDeleteKeeb = event => {
        event.preventDefault()
        let confirmAlert = window.confirm("Are you certain to delete Keeb?")
        if (confirmAlert === true) {
            API.deleteParts(props.profile.token, id)
            API.deleteKeeb(props.profile.token, id)
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
            props.profile.token,
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
            props.profile.token,
            updateParts.switches,
            updateParts.switchLube,
            updateParts.springWeight,
            updateParts.springLube,
            updateParts.switchFilm,
            updateParts.stabs,
            updateParts.stabLube,
            updateParts.keyset
        ).then(updateData => {
            setUpdateParts({
                ...updateParts,
                switches: updateParts.switches,
                switchLube: updateParts.switchLube,
                springWeight: updateParts.springWeight,
                springLube: updateParts.springLube,
                switchFilm: updateParts.switchFilm,
                stabs: updateParts.stabs,
                stabLube: updateParts.stabLube,
                keyset: updateParts.keyset
            })
        })
    }

    return (
        <div className="KeebDetails">
            <KeebUpdateCard
                handleKeebInputChange={handleKeebInputChange}
                handlePartsInputChange={handlePartsInputChange}
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
                switches={updateParts.switches}
                switchLube={updateParts.switchLube}
                springWeight={updateParts.springWeight}
                springLube={updateParts.springLube}
                switchFilm={updateParts.switchFilm}
                stabs={updateParts.stabs}
                stabLube={updateParts.stabLube}
                keyset={updateParts.keyset}
                loading={loading}
            />
        </div>
    )
}

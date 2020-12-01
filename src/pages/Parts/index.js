import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AddPartsForm from '../../components/AddPartsForm'
import API from '../../utils/API'

export default function Parts() {
    const [partsFormState, setPartsFormState] = useState({
        keeb: "",
        switches: "",
        springWeight: "",
        switchLube: "",
        switchFilm: "",
        stabs: "",
        stabLube: "",
        keyset: ""
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
                    token: "",
                    isLoggedIn: false
                })
            }
        })
    }, [])

    const handleInputChange = event => {
        const { name, value } = event.target
        setPartsFormState({
            ...partsFormState,
            [name]: value
        })
    }

    const handleSelectKeeb = event => {
        let keeb = event.target.value
        setPartsFormState({
            ...partsFormState,
            keeb: keeb
        })
    }

    return (
        <AddPartsForm
            Keeb={userProfile.keebs}
            handleInputChange={handleInputChange}
            handleSelectKeeb={handleSelectKeeb}
            keeb={partsFormState.keeb}
            switches={partsFormState.switches}
            springWeight={partsFormState.springWeight}
            switchLube={partsFormState.switchLube}
            switchFilm={partsFormState.switchFilm}
            stabs={partsFormState.stabs}
            stabLube={partsFormState.stabLube}
            keyset={partsFormState.keyset}
        />
    )
}

// React
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// API
import API from '../../utils/API'
// Context
import { useProfile, useProfileData } from '../../contexts/ProfileContext'
// Components
import AddPartsForm from '../../components/AddPartsForm'


export default function AddPartsPage(props) {
    // Parts Form State
    const [partsFormState, setPartsFormState] = useState({
        keeb: "",
        switches: "",
        springWeight: "",
        springLube: "",
        switchLube: "",
        switchFilm: "",
        stabs: "",
        stabLube: "",
        keyset: "",
        KeebId: ""
    })
    // Profile Context
    const profileState = useProfile()
    const profileData = useProfileData()
    // Keeb Id using params
    const { id } = useParams()

    useEffect(() => {
        getKeebName()
        profileData()
    }, [])

    function getKeebName() {
        API.getOneKeeb(id).then(res => {
            setPartsFormState({
                ...partsFormState,
                keeb: res.name,
                KeebId: res.id
            })
        })
    }

    const handleInputChange = event => {
        const { name, value } = event.target
        setPartsFormState({
            ...partsFormState,
            [name]: value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        API.createParts(profileState.token, partsFormState).then(res => {
            window.location.href = '/'
        })
    }

    return (
        <div className="content">
            <AddPartsForm
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                keeb={partsFormState.keeb}
                switches={partsFormState.switches}
                springWeight={partsFormState.springWeight}
                springLube={partsFormState.springLube}
                switchLube={partsFormState.switchLube}
                switchFilm={partsFormState.switchFilm}
                stabs={partsFormState.stabs}
                stabLube={partsFormState.stabLube}
                keyset={partsFormState.keyset}
            />
        </div>
    )
}

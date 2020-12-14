import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AddPartsForm from '../../components/AddPartsForm'
import API from '../../utils/API'


export default function Parts(props) {
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
            keeb: keeb,
        })
    }

    function checkKeebId() {
        for (let i = 0; i < props.profile.keebs.length; i++) {
            if (props.profile.keebs[i].name === partsFormState.keeb) {
                setPartsFormState({
                    ...partsFormState,
                    KeebId: props.profile.keebs[i].id
                })
            }
        }
    }

    const handleKeebId = event => {
        checkKeebId()
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        API.createParts(props.profile.token, {
            ...partsFormState,
            userId: id,
        }).then(data => {
            const token = localStorage.getItem('token')
            API.getProfile(token).then(keebData => {
                if (keebData) {
                    setUserProfile({
                        name: keebData.name,
                        email: keebData.email,
                        keebs: keebData.Keebs,
                        parts: keebData.Parts,
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
            }).then(alert("Parts Added!"), window.location.href="/")
        })
    }

    return (
        <AddPartsForm
            Keeb={userProfile.keebs}
            handleInputChange={handleInputChange}
            handleSelectKeeb={handleSelectKeeb}
            handleFormSubmit={handleFormSubmit}
            handleKeebId={handleKeebId}
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
    )
}

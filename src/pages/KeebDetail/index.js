import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from "../../utils/API"
import KeebUpdateCard from '../../components/KeebUpdateCard'

export default function KeebDetail(props) {
    const [updateKeeb, setUpdateKeeb] = useState({
        keebId: "",
        color: "",
        plate: ""
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
                color: keebData.color,
                plate: keebData.plate
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
    }
    const handlePartsInputChange = event => {
        const { name, value } = event.target
        setUpdateParts({
            ...updateParts,
            [name]: value
        })
    }

    const handleDeleteKeeb = event => {
        event.preventDefault()
        let confirmAlert = window.confirm("Are you willing to delete Keeb?")
        if (confirmAlert === true) {
            API.deleteKeeb(props.profile.token, id).then(data => {
                alert("Keeb Deleted!")
                window.location.href = "/"
            })
            API.deleteParts(props.profile.token, id)
        }
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        API.updateKeeb({
            color: updateKeeb.color,
            plate: updateKeeb.plate
        }).then(
            API.updateParts({
                switches: updateParts.switches,
                switchLube: updateParts.switchLube,
                springWeight: updateParts.springWeight,
                springLube: updateParts.springLube,
                switchFilm: updateParts.switchFilm,
                stabs: updateParts.stabs,
                stabLube: updateParts.stabLube,
                keysetL: updateParts.keyset
            }))
        // .then(data => {
        //     const token = localStorage.getItem('token')
        //     API.getProfile(token).then(keebData => {
        //         if (keebData) {
        //             setUserProfile({
        //                 name: keebData.name,
        //                 email: keebData.email,
        //                 keebs: keebData.Keebs,
        //                 parts: keebData.Parts,
        //                 token: token,
        //                 isLoggedIn: true
        //             })
        //         } else {
        //             localStorage.removeItem("token");
        //             setUserProfile({
        //                 name: "",
        //                 email: "",
        //                 keebs: [],
        //                 parts: [],
        //                 token: "",
        //                 isLoggedIn: false
        //             })
        //         }
        //     })
        // })
    }

    return (
        <div className="KeebDetails">
            <KeebUpdateCard
                handleKeebInputChange={handleKeebInputChange}
                handlePartsInputChange={handlePartsInputChange}
                handleFormSubmit={handleFormSubmit}
                handleDeleteKeeb={handleDeleteKeeb}
                keebId={updateKeeb.keebId}
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
            />
        </div>
    )
}

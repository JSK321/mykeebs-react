// React
import React, { useState, useEffect } from 'react'
// API
import API from '../../utils/API'
// Context
import { useProfile, useProfileData } from '../../contexts/ProfileContext'
// Components
import AddKeebForm from '../../components/AddKeebForm'
import SnackbarAlert from '../../components/SnackbarAlert'

export default function Keebs() {
    // Keeb Form State
    const [keebFormState, setKeebFormState] = useState({
        name: "",
        maker: "",
        case: "",
        angle: "",
        color: "",
        plate: ""
    })
    // Profile Context
    const profileState = useProfile()
    const profileData = useProfileData()

    const [open, setOpen] = useState({
        keeb: false
    });


    useEffect(() => {
        profileData()
    }, [])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            setOpen({
                keeb: false
            });
            API.getAllKeebs().then(res => {
                let keebId = res.slice(-1)[0].id
                window.location.href = `/addpartsform/${keebId}`
            })
        }
        setOpen({
            keeb: false
        });
        API.getAllKeebs().then(res => {
            let keebId = res.slice(-1)[0].id
            window.location.href = `/addpartsform/${keebId}`
        })
    };

    const handleInputChange = event => {
        const { name, value } = event.target
        setKeebFormState({
            ...keebFormState,
            [name]: value
        })

        if (event.target.name === 'angle') {
            setKeebFormState({
                ...keebFormState,
                angle: `${value}°`
            })
        }
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        API.createKeeb(profileState.token, keebFormState).then(res => {
            setOpen({ keeb: true })
        })
    }

    return (
        <div className="content">
            <AddKeebForm
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                name={keebFormState.name}
                maker={keebFormState.maker}
                case={keebFormState.case}
                angle={keebFormState.angle}
                color={keebFormState.color}
                plate={keebFormState.plate}
            />
            <SnackbarAlert
                open={open}
                handleClose={handleClose}
            />
        </div>
    )
}

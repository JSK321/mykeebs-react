import React, { useState, useEffect } from 'react'
import AddKeebForm from '../../components/AddKeebForm'
import API from '../../utils/API'

export default function Keebs() {
    const [keebFormState, setKeebFormState] = useState({
        name: "",
        size: "",
        maker: "",
        case: "",
        color: "",
        plate: ""
    })

    const handleInputChange = event => {
        const { name, value } = event.target
        setKeebFormState({
            ...keebFormState,
            [name]: value
        })
    }

    const handleSelectSize = event => {
        let size = event.target.value
        setKeebFormState({
            ...keebFormState,
            size: size
        })
    }

    return (
        <AddKeebForm
            handleInputChange={handleInputChange}
            handleSelectSize={handleSelectSize}
            name={keebFormState.name}
            size={keebFormState.size}
            maker={keebFormState.maker}
            case={keebFormState.case}
            color={keebFormState.color}
            plate={keebFormState.plate}
        />
    )
}

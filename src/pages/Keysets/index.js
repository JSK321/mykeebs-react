import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import KeysetCard from '../../components/KeysetCard'
import API from '../../utils/API'

export default function Keysets() {
    const [keysetState, setKeysetState] = useState({
        id: "",
        keyset: "",
        kits: "",
        material: "",
        type: "",
        profile: "",
        keysetImage: ""
    })

    const { id } = useParams()

    useEffect(() => {
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
    }, [])

    return (
        <KeysetCard
            id={keysetState.id}
            keyset={keysetState.keyset}
            kits={keysetState.kits}
            material={keysetState.material}
            type={keysetState.type}
            profile={keysetState.profile}
            keysetImage={keysetState.keysetImage}
        />
    )
}

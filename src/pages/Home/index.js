import React, { useState, useEffect } from 'react'
import KeebCard from '../../components/KeebCard'
import API from '../../utils/API'

export default function Home(props) {

    const [keebInfo, setKeebInfo] = useState({
        keebs: [],
        parts: []
    })

    function loadKeebInfo() {
        API.getAllKeebs().then(res => {
            setKeebInfo({
                ...keebInfo,
                keebs: res
            })
        })
    }

    useEffect(() => {
        loadKeebInfo()
    }, [])

    return (
        <div className="container">
            <div className="row">
                {keebInfo.keebs.map(keebObj => (
                    <div className="col-md-auto">
                        <KeebCard
                            name={keebObj.name}
                            size={keebObj.size}
                            maker={keebObj.maker}
                            case={keebObj.case}
                            color={keebObj.color}
                            plate={keebObj.plate}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
import React, { useState, useEffect } from 'react'
import KeebCard from '../../components/KeebCard'
import API from '../../utils/API'

export default function Home(props) {

    const [keebInfo, setKeebInfo] = useState({
        keebs: []
    })

    function loadKeebInfo() {
        API.getAllKeebs().then(res => {
            console.log(res)
            setKeebInfo({
                keebs: res
            })
        })
    }

    useEffect(() => {
        loadKeebInfo()
    }, [])

    return (
        <div className="col-md-4">
            {keebInfo.keebs.map(keebObj => (
                <KeebCard
                    name={keebObj.name}
                    size={keebObj.size}
                    maker={keebObj.maker}
                    case={keebObj.case}
                    color={keebObj.color}
                    plate={keebObj.plate}
                />
            ))}
        </div>
    )
}

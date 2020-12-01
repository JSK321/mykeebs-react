import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from "../../utils/API"
import './styles.css'

export default function KeebDetail() {
    const [keeb, setKeeb] = useState({
        name: "",
        maker: "",
        size: "",
        case: "",
        color: "",
        plate: ""
    })

    const { id } = useParams()

    useEffect(() => {
        API.getOneKeeb(id).then(keebData => {
            if (keebData) {
                setKeeb({
                    name: keebData.name,
                    maker: keebData.maker,
                    size: keebData.size,
                    case: keebData.case,
                    color: keebData.color,
                    plate: keebData.plate
                })
            }
        })
    }, [])

    return (
        <div className="KeebDetails">
            <div className="card">
                <img src="https://i.imgur.com/OVqaz9t.jpg" className="card-img-top" alt="Keeb Pic" />
                <div className="card-body">
                    <h5 className="card-title">{keeb.maker} {keeb.name}</h5>
                    <ul className="list-group" style={{ listStyleType: "none" }}>
                        <li className="list-group-item"><strong>Keeb Size:</strong> {keeb.size}%</li>
                        <li className="list-group-item"><strong>Case:</strong> {keeb.case}</li>
                        <li className="list-group-item"><strong>Color:</strong> {keeb.color}</li>
                        <li className="list-group-item"><strong>Plate:</strong> {keeb.plate}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

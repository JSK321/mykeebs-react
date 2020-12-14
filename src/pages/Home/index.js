import React, { useState, useEffect } from 'react'
import KeebCard from '../../components/KeebCard'
import API from '../../utils/API'

export default function Home(props) {

    const [keebInfo, setKeebInfo] = useState({
        keebs: []
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
        <div className="container" style={{marginTop:"0px"}}>
            <div className="row">
                {keebInfo != undefined ?
                    keebInfo.keebs.map(keebObj => (
                        <div className="col-md-4">
                            <KeebCard
                                // Front side of Card
                                keebImage={keebObj.keebImage}
                                name={keebObj.name}
                                size={keebObj.size}
                                maker={keebObj.maker}
                                case={keebObj.case}
                                color={keebObj.color}
                                plate={keebObj.plate}
                                // Back side of Card
                                switches={keebObj.Parts[0].switches}
                                springWeight={keebObj.Parts[0].springWeight}
                                springLube={keebObj.Parts[0].springLube}
                                switchFilm={keebObj.Parts[0].switchFilm}
                                stabs={keebObj.Parts[0].stabs}
                                stabLube={keebObj.Parts[0].stabLube}
                                keyset={keebObj.Parts[0].keyset}
                                id={keebObj.id}
                                isLoggedIn={props.profile.isLoggedIn}
                            />
                        </div>
                    ))
                    : null}
            </div>
        </div>
    )
}

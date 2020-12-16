import React, { useState, useEffect } from 'react'
import KeebCard from '../../components/KeebCard'
import API from '../../utils/API'

export default function Home(props) {

    const [keebInfo, setKeebInfo] = useState({
        keebs: [],
    })

    const [searchState, setSearchState] = useState({
        search: ""
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

    const handleSearchInput = event => {
        event.preventDefault()
        let keyword = event.target.value
        let filtered = keebInfo.keebs.filter(keebObj => {
            return (keebObj.size.toString().indexOf(keyword) > -1)
        })
        if (keyword === "") {
            filtered = [];
            loadKeebInfo()
        }
        setKeebInfo({
            keebs: filtered
        })
        setSearchState({
            search: keyword
        })
    }

    return (
        <div className="container" style={{ marginBottom: "75px" }}>
            <input
                className="form-control"
                type="search"
                placeholder="Search by Keeb Size"
                onChange={handleSearchInput}
                style={{ 
                    width: "250px", 
                    marginLeft: "auto", 
                    marginRight: "auto", 
                    marginBottom: "10px",
                    borderRadius: "10px",
                    border:"2px solid slateblue"
                }}
            />
            <div className="row">
                {keebInfo !== undefined ?
                    keebInfo.keebs
                        .map(keebObj => (
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <KeebCard
                                    // Front side of Card
                                    key={keebObj.id}
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

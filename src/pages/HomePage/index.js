// React
import React, { useState, useEffect } from 'react'
// API
import API from '../../utils/API'
// Context
import { useProfile, useProfileData } from '../../contexts/ProfileContext'
// Components
import SearchKeebInput from '../../components/SearchKeebInput'
import KeebCard from '../../components/KeebCard'
// Material-UI Components
import { Container, Grid, Grow } from '@material-ui/core'
// CSS
import './styles.css'

export default function HomePage(props) {
    // Profile 
    const profile = useProfile()
    const profileData = useProfileData()

    const [keebInfo, setKeebInfo] = useState({
        keebs: [],
    })

    const [list, setList] = useState({
        keebList: []
    })

    const [searchState, setSearchState] = useState({
        search: ""
    })

    useEffect(() => {
        profileData()
        loadKeebInfo()
    }, [])

    async function loadKeebInfo() {
        let keebs = await API.getAllKeebs().then(res => {
            setKeebInfo({
                keebs: res
            })
            setList({
                keebList: res
            })
            return res
        })

        if (keebs !== null) {
            checkScale(keebs)
        }
    }

    const handleSearchInput = event => {
        event.preventDefault()
        let keyword = event.target.value
        let filtered = keebInfo.keebs.filter(keebObj => {
            return (
                keebObj.maker.toLowerCase().indexOf(keyword) > -1 ||
                keebObj.name.toLowerCase().indexOf(keyword) > -1
                // ||
                // keebObj.case.toLowerCase().indexOf(keyword) > -1 ||
                // keebObj.angle.toString().indexOf(keyword) > -1 ||
                // keebObj.plate.toLowerCase().indexOf(keyword) > -1 ||
                // keebObj.color.toLowerCase().indexOf(keyword) > -1 ||
                // keebObj.Parts[0].switches.toLowerCase().indexOf(keyword) > -1 ||
                // keebObj.Parts[0].switchLube.toLowerCase().indexOf(keyword) > -1 ||
                // keebObj.Parts[0].springWeight.toString().indexOf(keyword) > -1 ||
                // keebObj.Parts[0].springLube.toLowerCase().indexOf(keyword) > -1 ||
                // keebObj.Parts[0].switchFilm.toLowerCase().indexOf(keyword) > -1 ||
                // keebObj.Parts[0].stabs.toLowerCase().indexOf(keyword) > -1 ||
                // keebObj.Parts[0].stabLube.toLowerCase().indexOf(keyword) > -1 ||
                // keebObj.Parts[0].keyset.toLowerCase().indexOf(keyword) > -1
            )
        })

        if (keyword === "") {
            loadKeebInfo()
        }

        setList({
            keebList: filtered
        })

        setSearchState({
            search: keyword
        })
    }

    const handleSearch = async event => {
        event.preventDefault();
        let value = event.target.children[0].children[0].children[0].children[1].value
        let search = await API.getKeeb(value)

        if (search !== null) {
            checkKeeb(search)
        }
    }

    function handleNewSearch() {
        let search = document.getElementById("searchInput")
        search.parentNode.scrollIntoView({ behavior: 'smooth' })
        setTimeout(function focus() {
            search.focus()
        }, 500)
    }

    function checkKeeb(keeb) {
        let keebs = keebInfo.keebs

        for (let i = 0; i < keebs.length; i++) {
            if (keebs[i].name !== keeb.name) {
                let keebCard = document.getElementById(keebs[i].name)
                let keebSearch = document.getElementById(keeb.name)
                let searchBtn = keebSearch.lastChild.children[1]
                if (keebCard.style.transform === "" || keebCard.style.transform === 'scale(1)') {
                    keebCard.style.transitionDuration = '1s'
                    keebCard.style.transitionProperty = 'transform'
                    keebCard.style.transform = 'scale(0)'
                    keebSearch.style.transform = 'scale(1)'
                    searchBtn.style.transform = 'scale(1)'
                    keebSearch.scrollIntoView({ behavior: 'smooth' })
                }
            }
        }
    }

    function checkScale(keebs) {
        for (let i = 0; i < keebs.length; i++) {
            let keebCard = document.getElementById(keebs[i].name)
            let searchBtn = keebCard.lastChild.children[1]
            if (keebCard.style.transform === 'scale(0)') {
                keebCard.style.transform = 'scale(1)'
            }

            if (searchBtn.style.transform === 'scale(1)') {
                searchBtn.style.transform = 'scale(0)'
            } else {
                searchBtn.style.transform = 'scale(0)'
            }
        }

    }

    return (
        <Container className="content">
            <div className="content-inside">
                <SearchKeebInput
                    handleSearch={handleSearch}
                    handleSearchInput={handleSearchInput}
                    keebs={list.keebList}
                    saerch={searchState}
                />
                <Grid container spacing={3}>
                    {keebInfo.keebs !== null ?
                        keebInfo.keebs.map(keeb => (
                            <Grow
                                in={true}
                                timeout={1000}
                            >
                                <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={keeb.id}>
                                    <KeebCard
                                        handleNewSearch={handleNewSearch}
                                        // Case
                                        id={keeb.id}
                                        name={keeb.name}
                                        maker={keeb.maker}
                                        keebImage={keeb.keebImage}
                                        color={keeb.color}
                                        case={keeb.case}
                                        angle={keeb.angle}
                                        plate={keeb.plate}
                                        photos={keeb.KeebPhotos}
                                        // Parts
                                        keyset={keeb.Parts[0].keyset}
                                        switches={keeb.Parts[0].switches}
                                        springWeight={keeb.Parts[0].springWeight}
                                        springLube={keeb.Parts[0].springLube}
                                        switchLube={keeb.Parts[0].switchLube}
                                        switchFilm={keeb.Parts[0].switchFilm}
                                        stabs={keeb.Parts[0].stabs}
                                        stabLube={keeb.Parts[0].stabLube}
                                    />
                                </Grid>
                            </Grow>
                        ))
                        :
                        null
                    }
                </Grid>
            </div>
        </Container>
    )
}

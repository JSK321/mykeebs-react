// React
import React, { useState, useEffect } from 'react'
// Context
import { useProfile, useProfileData } from '../../contexts/ProfileContext'
import { useKeebs, useKeebData } from '../../contexts/KeebContext'
// Components
import SearchKeebInput from '../../components/SearchKeebInput'
import KeebCard from '../../components/KeebCard'
// Material-UI Components
import { Container, Grid, } from '@material-ui/core'
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles';

export default function HomePage(props) {
    // Profile 
    const profileState = useProfile()
    const profileData = useProfileData()
    // Keebs
    const keebState = useKeebs()
    const keebData = useKeebData()

    const [keebInfo, setKeebInfo] = useState({
        keebs: [],
    })

    const [searchState, setSearchState] = useState({
        search: ""
    })

    useEffect(() => {
        profileData()
        keebData()
    }, [])

    const handleSearchInput = event => {
        event.preventDefault()
        let keyword = event.target.value
        let filtered = keebInfo.keebs.filter(keebObj => {
            return (
                keebObj.size.toString().indexOf(keyword) > -1 ||
                keebObj.maker.toLowerCase().indexOf(keyword) > -1 ||
                keebObj.name.toLowerCase().indexOf(keyword) > -1 ||
                keebObj.case.toLowerCase().indexOf(keyword) > -1 ||
                keebObj.angle.toString().indexOf(keyword) > -1 ||
                keebObj.plate.toLowerCase().indexOf(keyword) > -1 ||
                keebObj.color.toLowerCase().indexOf(keyword) > -1 ||
                keebObj.Parts[0].switches.toLowerCase().indexOf(keyword) > -1 ||
                keebObj.Parts[0].switchLube.toLowerCase().indexOf(keyword) > -1 ||
                keebObj.Parts[0].springWeight.toString().indexOf(keyword) > -1 ||
                keebObj.Parts[0].springLube.toLowerCase().indexOf(keyword) > -1 ||
                keebObj.Parts[0].switchFilm.toLowerCase().indexOf(keyword) > -1 ||
                keebObj.Parts[0].stabs.toLowerCase().indexOf(keyword) > -1 ||
                keebObj.Parts[0].stabLube.toLowerCase().indexOf(keyword) > -1 ||
                keebObj.Parts[0].keyset.toLowerCase().indexOf(keyword) > -1
            )
        })
        if (keyword === "") {
            // loadKeebInfo()
        }
        setKeebInfo({
            keebs: filtered
        })
        setSearchState({
            search: keyword
        })
    }

    return (
        <Container>
            <SearchKeebInput />
            <Grid container spacing={3}>
                {keebState.keebs !== null ?
                    keebState.keebs.map(keeb => (
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={keeb.id}>
                            <KeebCard 
                                name={keeb.name}
                                maker={keeb.maker}
                                keebImage={keeb.keebImage}
                                color={keeb.color}
                                case={keeb.case}
                                angle={keeb.angle}
                                plate={keeb.plate}
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
                    ))
                    :
                    null
                }
            </Grid>
        </Container>
    )
}

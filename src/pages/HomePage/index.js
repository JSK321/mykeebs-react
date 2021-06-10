// React
import React, { useState, useEffect } from 'react'
// API
import API from '../../utils/API'
// Components
import KeebCard from '../../components/KeebCard'
// Material-UI Components
import { Container, Grid, Grow } from '@material-ui/core'
// CSS
import './styles.css'

export default function HomePage(props) {
    const [keebInfo, setKeebInfo] = useState({
        keebs: [],
    })

    useEffect(() => {
        loadKeebInfo()
    }, [])

    function loadKeebInfo() {
        API.getAllKeebs().then(res => {
            setKeebInfo({
                keebs: res
            })
        })
    }

    function handleNewSearch() {
        let search = document.getElementById("searchInput")
        search.parentNode.scrollIntoView({ behavior: 'smooth' })
        setTimeout(function focus() {
            search.focus()
        }, 500)
    }

    return (
        <Container className="content">
            <div className="content-inside">
                <Grid container spacing={3}>
                    {keebInfo.keebs !== null ?
                        keebInfo.keebs.map(keeb => (
                            <Grow
                                key={keeb.id}
                                in={true}
                            // in={grow}
                            // appear={grow}
                            // timeout={1000}
                            // timeout={{
                            //     appear: 1000,
                            //     enter: 1000,
                            // }}
                            >
                                <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
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
                                        keebSound={keeb.keebSoundTest}
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

// React
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
// API
import API from '../../utils/API'
// Components
import LoadingCircle from '../../components/LoadingCircle'
// Contexts
import { useProfile, useProfileData } from '../../contexts/ProfileContext'
// Material-UI Components
import { Avatar, Card, List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, IconButton, Tooltip, Typography } from '@material-ui/core'
// Material-UI Icons
import KeyboardIcon from '@material-ui/icons/Keyboard';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
    updateKeebLink: {
        textDecoration: "none",
        color: "black",
    },
    keebListDiv: {
        dispaly: 'flex',
        flexDirection: "column",
        width: '100%',
        height: "510px"
    },
    keebList: {
        height: '400px',
        overflow: "auto"
    },
    keebIcon: {
        color: 'white'
    },
    input: {
        display: 'none'
    },
})

export default function ViewKeebList(props) {
    const classes = useStyles()
    const profile = useProfile()
    const profileData = useProfileData()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        profileData()
    }, [])

    const handleUploadSoundBtn = event => {
        event.preventDefault()
        let id = event.currentTarget.id
        document.getElementById(`sound${id}`).click()
    }

    const handleSoundTest = async event => {
        event.preventDefault()
        let id = event.currentTarget.id.slice(5)
        const files = event.target.files[0]
        const audio = new FormData()
        setLoading(true)
        audio.append('file', files)
        audio.append('upload_preset', 'keebs_setups')
        const res = await API.uploadAudio(audio)
        const file = await res
        API.updateSound(profile.token, id, file.secure_url)
        setLoading(false)
    }

    return (
        <Card className={classes.keebListDiv}>
            <h2 style={{ textAlign: 'center' }}>Keebs</h2>
            <List className={classes.keebList}>
                {profile !== null ?
                    profile.keebs.map(res => (
                        <ListItem key={res.id} divider>
                            <ListItemAvatar>
                                <Avatar>
                                    <Tooltip title={`Update ${res.maker} ${res.name} photos`} arrow>
                                        <IconButton
                                            className={classes.keebIcon}
                                            onClick={() => window.location.href = `/updatekeeb/photos/${res.id}`}
                                        >
                                            <KeyboardIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <>
                                        <Tooltip title={`Update ${res.maker} ${res.name} parts`} arrow>
                                            <Link to={`/updatekeeb/${res.id}`} className={classes.updateKeebLink}>
                                                <strong>{res.maker} {res.name}</strong>
                                            </Link>
                                        </Tooltip>
                                    </>
                                }
                            />
                            <ListItemSecondaryAction>
                                <input
                                    type="file"
                                    className={classes.input}
                                    id={`sound${res.id}`}
                                    onChange={handleSoundTest}
                                />
                                {loading ?
                                    <LoadingCircle />
                                    :
                                    <label htmlFor={`sound${res.id}`}>
                                        <Tooltip title={`Upload sound test`} arrow>
                                            <IconButton
                                                edge="end"
                                                aria-label="sound test"
                                                id={res.id}
                                                onClick={handleUploadSoundBtn}
                                            >
                                                <MusicNoteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </label>
                                }
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))
                    :
                    null
                }
            </List>
        </Card >
    )
}
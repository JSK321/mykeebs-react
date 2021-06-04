// React
import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
// API
import API from '../../utils/API'
// Contexts
import { useProfile, useProfileData } from '../../contexts/ProfileContext'
// Material-UI Components
import { Avatar, Card, List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, IconButton, Tooltip, Typography } from '@material-ui/core'
// Material-UI Icons
import KeyboardIcon from '@material-ui/icons/Keyboard';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
    updateKeebLink: {
        textDecoration: "none",
        color: "black"
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
    }
})

// Keeb list in profile
export default function ViewKeebList(props) {
    const classes = useStyles()
    const profile = useProfile()
    const profileData = useProfileData()

    useEffect(() => {
        profileData()
    }, [])

    const handleRemoveKeeb = event => {
        event.preventDefault()
        let id = event.currentTarget.id
        let name = event.currentTarget.getAttribute('name')
        let confirmAlert = window.confirm(`Are you sure to delete ${name}`)
        if (confirmAlert === true) {
            API.deleteKeeb(profile.token, id).then(res => {
                window.location.reload()
            })
        }
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
                                    <Tooltip title={`Update ${res.maker} ${res.name} parts`} arrow>
                                        <Link to={`/updatekeeb/${res.id}`} className={classes.updateKeebLink}>
                                            <strong>Update: {res.maker} {res.name}</strong>
                                        </Link>
                                    </Tooltip>
                                }
                            />
                            <ListItemSecondaryAction>
                                <Tooltip title={`Delete ${res.maker} ${res.name}`} arrow>
                                    <IconButton
                                        edge="end"
                                        aria-label="remove"
                                        name={`${res.maker} ${res.name}`}
                                        id={res.id}
                                        onClick={handleRemoveKeeb}
                                    >
                                        <RemoveCircleOutlineIcon />
                                    </IconButton>
                                </Tooltip>
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
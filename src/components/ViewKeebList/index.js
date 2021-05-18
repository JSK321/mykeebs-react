// React
import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
// API
import API from '../../utils/API'
// Contexts
import { useProfile, useProfileData } from '../../contexts/ProfileContext'
// Material-UI Components
import {Avatar, Card, List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, IconButton, } from '@material-ui/core'
// Material-UI Icons
import KeyboardIcon from '@material-ui/icons/Keyboard';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
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
        height:"510px"
    },
    keebList: {
        height: '400px',
        overflow: "auto"
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
        API.deleteKeeb(profile.token, id).then(res => {
            window.location.reload()
        })
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
                                    <KeyboardIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Link to={`/updatekeeb/${res.id}`} className={classes.updateKeebLink}>
                                        <strong>Update: {res.maker} {res.name}</strong>
                                    </Link>
                                }
                            />
                            <ListItemSecondaryAction>
                                <IconButton
                                    edge="end"
                                    aria-label="remove"
                                    id={res.id}
                                    onClick={handleRemoveKeeb}
                                >
                                    <RemoveCircleOutlineIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))
                    :
                    null
                }
            </List>
        </Card>
    )
}
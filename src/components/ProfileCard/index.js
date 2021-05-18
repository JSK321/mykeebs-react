// React
import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
// Contexts
import { useProfile, useProfileData } from '../../contexts/ProfileContext'
// Material-UI Components
import { Avatar, Card, CardActions, CardContent, CardMedia, Button, Typography, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core'
// Material-UI Icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import EmailIcon from '@material-ui/icons/Email'
import SettingsIcon from '@material-ui/icons/Settings'
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles'
// CSS
import './styles.css'

const useStyles = makeStyles((theme) => ({
    profileCard: {
        height: '510px'
    },
    updateProfileBtn: {
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}))

export default function ProfileCard(props) {
    const classes = useStyles()
    const profile = useProfile()
    const profileData = useProfileData()

    useEffect(() => {
        profileData()
    }, [])

    return (
        <Card className={classes.profileCard}>
            <CardMedia
                component='img'
                alt='profile image'
                // height='140'
                image={profile !== null ? profile.profileImage : null}
                className="profileImage"
            />
            <CardContent>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <AccountCircleIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography variant='h6'>
                                    {profile !== null ? profile.name : null}
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <EmailIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography variant='p'>
                                    {profile !== null ? profile.email : null}
                                </Typography>
                            }
                        />
                    </ListItem>
                </List>
            </CardContent>
            <CardActions>
                <Button
                    endIcon={<SettingsIcon />}
                    className={classes.updateProfileBtn}
                >
                    <Link
                        to={profile !== null ? `/updateprofile/${profile.id}` : null}
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        Update profile
                    </Link>
                </Button>
            </CardActions>
        </Card >
    )
}

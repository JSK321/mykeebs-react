// React
import React, { useState } from 'react'
// clsx
import clsx from 'clsx';
// Components
import KeebImageStepper from '../../components/KeebImageStepper'
// Material-UI Components
import { Card, CardHeader, CardActionArea, CardMedia, CardActions, Collapse, IconButton, Typography, List, ListItem, ListItemText, Tooltip, Popover } from '@material-ui/core'
// Material-UI Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicOffIcon from '@material-ui/icons/MusicOff'
import FindReplaceIcon from '@material-ui/icons/FindReplace';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles';
// CSS 
import './styles.css'

const useStyles = makeStyles((theme) => ({
    keebCard: {
        backgroundColor: "#0B0B0D",
        // color: '#BFBFBF'
        color: '#747C8C'
    },
    media: {
        height: '100%',
        width: '100%',
        objectFit: 'contain'
    },
    audioPop: {
        "& .MuiPaper-root": {
            backgroundColor: "#BFBFBF"
        }
    },
    cardTitle: {
        "& .MuiCardHeader-subheader": {
            color: "#747C8C"
            // color: "#BFBFBF"
        }
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        color: '#BFBFBF'
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },

}));

export default function KeebCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const [audio, setAudio] = useState(null)

    const handleClick = event => {
        if (parseInt(event.currentTarget.id) === props.id) {
            setAnchorEl(event.currentTarget);
        }
        if (event.currentTarget.id === 'keebSoundTest') {
            setAudio(event.currentTarget)
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
        setAudio(null)
    };

    const open = Boolean(anchorEl);
    const show = Boolean(audio)

    const id = open ? 'simple-popover' : undefined;

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <Card className={classes.keebCard} id={props.name}>
            <CardHeader
                title={props.name}
                className={classes.cardTitle}
                subheader={`Designed by: ${props.maker}`}
            />
            <CardActionArea
                aria-describedby={id}
                onClick={handleClick}
                id={props.id}
            >
                {props.keebImage !== null ?
                    <CardMedia
                        component='img'
                        alt={`${props.name} photo`}
                        className={classes.media}
                        image={props.keebImage}
                        title={props.name}
                    />
                    :
                    null
                }
            </CardActionArea>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <KeebImageStepper
                    photos={props.photos}
                />
            </Popover>
            <List>
                <ListItem divider>
                    <ListItemText
                        primary={
                            <Typography variant="p">
                                <strong>Angle: </strong>{props.angle}
                            </Typography>
                        }
                    />
                </ListItem>
                <ListItem divider>
                    <ListItemText
                        primary={
                            <Typography variant="p">
                                <strong>Case: </strong>{props.case}
                            </Typography>
                        }
                    />
                </ListItem>
                <ListItem divider>
                    <ListItemText
                        primary={
                            <Typography variant="p">
                                <strong>Color: </strong>{props.color}
                            </Typography>
                        }
                    />
                </ListItem>
                <ListItem divider>
                    <ListItemText
                        primary={
                            <Typography variant="p">
                                <strong>Keyset: </strong>{props.keyset}
                            </Typography>
                        }
                    />
                </ListItem>
            </List>
            <CardActions disableSpacing>
                {!props.keebSound ?
                    <IconButton
                        aria-label="no sound test"
                        disabled
                        style={{ color: "#BFBFBF" }}
                    >
                        <MusicOffIcon />
                    </IconButton>
                    :
                    <Tooltip title="Sound test" arrow>
                        <IconButton
                            aria-label="sound test"
                            id='keebSoundTest'
                            onClick={handleClick}
                            style={{ color: "#BFBFBF" }}
                        >
                            <MusicNoteIcon />
                        </IconButton>
                    </Tooltip>
                }

                <Tooltip title="New search">
                    <IconButton
                        aria-label="search again"
                        style={{ color: "#BFBFBF" }}
                        onClick={props.handleNewSearch}
                    >
                        <FindReplaceIcon />
                    </IconButton>
                </Tooltip>

                <Popover
                    id='keebSoundTestPopover'
                    open={show}
                    anchorEl={audio}
                    className={classes.audioPop}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <audio id="audio" controls style={{ backgroundColor: '#BFBFBF' }}>
                        <source src={props.keebSound} id="keebAudioSrc" />
                    </audio>
                </Popover>

                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <ListItem divider>
                    <ListItemText
                        primary={
                            <Typography variant="p">
                                <strong>Plate: </strong>{props.plate}
                            </Typography>
                        }
                    />
                </ListItem>
                <ListItem divider>
                    <ListItemText
                        primary={
                            <Typography variant="p">
                                <strong>Switches: </strong>{props.switches}
                            </Typography>
                        }
                    />
                </ListItem>
                <ListItem divider>
                    <ListItemText
                        primary={
                            <Typography variant="p">
                                <strong>Switch Lube: </strong>{props.switchLube}
                            </Typography>
                        }
                    />
                </ListItem>
                <ListItem divider>
                    <ListItemText
                        primary={
                            <Typography variant="p">
                                <strong>Switch Film: </strong>{props.switchFilm}
                            </Typography>
                        }
                    />
                </ListItem>
                <ListItem divider>
                    <ListItemText
                        primary={
                            <Typography variant="p">
                                <strong>Spring: </strong>{props.springWeight}
                            </Typography>
                        }
                    />
                </ListItem>
                <ListItem divider>
                    <ListItemText
                        primary={
                            <Typography variant="p">
                                <strong>Spring Lube: </strong>{props.springLube}
                            </Typography>
                        }
                    />
                </ListItem>
                <ListItem divider>
                    <ListItemText
                        primary={
                            <Typography variant="p">
                                <strong>Stabilizers: </strong>{props.stabs}
                            </Typography>
                        }
                    />
                </ListItem>
                <ListItem divider>
                    <ListItemText
                        primary={
                            <Typography variant="p">
                                <strong>Stabilizer Lube: </strong>{props.stabLube}
                            </Typography>
                        }
                    />
                </ListItem>
            </Collapse>
        </Card>
    )
}

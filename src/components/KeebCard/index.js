// React
import React, { useState } from 'react'
// API 
import API from '../../utils/API'
// clsx
import clsx from 'clsx';
// Components
import KeebImageStepper from '../../components/KeebImageStepper'
// Material-UI Components
import { Card, CardHeader, CardActionArea, CardMedia, CardActions, Collapse, IconButton, Typography, List, ListItem, ListItemText, Tooltip, Popover } from '@material-ui/core'
// Material-UI Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FindReplaceIcon from '@material-ui/icons/FindReplace';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    media: {
        height: '100%',
        width: '100%',
        objectFit: 'contain'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

export default function KeebCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
        console.log(props.photos)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <Card className='keebCard' id={props.name}>
            <CardHeader
                title={props.name}
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
                <Typography>
                    <KeebImageStepper
                        photos={props.photos}
                    />
                </Typography>
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
                <Tooltip title="Sound test">
                    <IconButton
                        aria-label="sound test"
                    >
                        <MusicNoteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="New search">
                    <IconButton
                        aria-label="search again"
                        onClick={props.handleNewSearch}
                    >
                        <FindReplaceIcon />
                    </IconButton>
                </Tooltip>

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

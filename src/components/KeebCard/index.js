// React
import React, { useState } from 'react'
// clsx
import clsx from 'clsx';
// Material-UI Components
import { Card, CardHeader, CardMedia, CardActions, Collapse, IconButton, Typography, List, ListItem, ListItemText } from '@material-ui/core'
// Material-UI Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
    },
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
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                title={props.name}
                subheader={`Designed by: ${props.maker}`}
            />
            <CardMedia
                component='img'
                alt={`${props.name} photo`}
                className={classes.media}
                image={props.keebImage}
                title={props.name}
            />
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
                {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton> */}
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                // removes border
                // style={{
                //     border:"none",
                //     outline:"none"
                //    }}
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
                                <strong>Spring Force: </strong>{props.springWeight}
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

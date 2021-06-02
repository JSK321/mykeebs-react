// React
import React from 'react';
// Material-UI Components
import {Popover, Typography} from '@material-ui/core';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
}));

export default function UpdatePopover(props) {
    const classes = useStyles();
   
    return (
        <div>
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={props.open}
                anchorEl={props.anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={props.handlePopoverClose}
                disableRestoreFocus
            >
                <Typography>{props.name}</Typography>
            </Popover>
        </div>
    );
}

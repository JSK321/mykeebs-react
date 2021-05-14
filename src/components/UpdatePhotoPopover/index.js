// React
import React, { useState } from 'react';
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

export default function UpdatePhotoPopover(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

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
                <Typography>Update Photo</Typography>
            </Popover>
        </div>
    );
}

// React
import React, { useState } from 'react'
// Material-UI Components
import { Snackbar } from '@material-ui/core'
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles';
// Material-UI Lab
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function SnackbarAlert(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Snackbar open={props.open.success} autoHideDuration={5000} onClose={props.handleClose}>
                <Alert onClose={props.handleClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
            
            <Snackbar open={props.open.error} autoHideDuration={5000} onClose={props.handleClose}>
                <Alert onClose={props.handleClose} severity="error">
                    Email/Password is incorrect, please try again.
                </Alert>
            </Snackbar>
            
        </div>
    )
}

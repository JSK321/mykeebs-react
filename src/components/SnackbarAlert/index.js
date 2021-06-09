// React
import React from 'react'
// Material-UI Components
import { Snackbar, IconButton } from '@material-ui/core'
// Material-UI Icons
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles'
// Material-UI Lab
import MuiAlert from '@material-ui/lab/Alert'

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
    removeKeebSnack: {
        "& .MuiSnackbarContent-root": {
            backgroundColor: "#212026",
            color: '#BFBFBF'
        }
    },
}));

export default function SnackbarAlert(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* Profile Snackbar */}
            <Snackbar open={props.open.profile} autoHideDuration={3000} onClose={props.handleClose}>
                <Alert onClose={props.handleClose} severity="success">
                    Profile has been updated!
                </Alert>
            </Snackbar>
            {/* Keeb Snackbar */}
            <Snackbar open={props.open.keeb} autoHideDuration={3000} onClose={props.handleClose}>
                <Alert onClose={props.handleClose} severity="success">
                    Keeb has been added!
                </Alert>
            </Snackbar>
            {/* Keeb Parts Snackbar */}
            <Snackbar open={props.open.keebParts} autoHideDuration={3000} onClose={props.handleClose}>
                <Alert onClose={props.handleClose} severity="success">
                    Keeb parts has been added!
                </Alert>
            </Snackbar>
            {/* Keeb Parts Update Snackbar */}
            <Snackbar open={props.open.parts} autoHideDuration={3000} onClose={props.handleClose}>
                <Alert onClose={props.handleClose} severity="success">
                    Keeb parts has been updated!
                </Alert>
            </Snackbar>
            {/* Keeb Sound Test Snackbar */}
            <Snackbar open={props.open.sound} autoHideDuration={3000} onClose={props.handleClose}>
                <Alert onClose={props.handleClose} severity="success">
                    Sound test has been uploaded!
                </Alert>
            </Snackbar>
            {/* Incorrect Log In Snackbar */}
            <Snackbar open={props.open.error} autoHideDuration={3000} onClose={props.handleClose}>
                <Alert onClose={props.handleClose} severity="error">
                    Email/Password is incorrect, please try again.
                </Alert>
            </Snackbar>
            {/* Keeb Remove Snackbar */}
            <Snackbar open={props.open.deleted} autoHideDuration={3000} onClose={props.handleClose}>
                <Alert onClose={props.handleClose} severity="info">
                    Keeb has been removed.
                </Alert>
            </Snackbar>
            {/* Keeb Remove Confirm Snackbar */}
            <Snackbar
                open={props.open.confirm}
                autoHideDuration={5000}
                onClose={props.handleCloseConfirm}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                message={`Are you sure to remove ${props.keeb}?`}
                className={classes.removeKeebSnack}
                action={
                    <>
                        <IconButton
                            aria-label="ok"
                            style={{ color: "lawngreen" }}
                            onClick={props.handleConfirm}
                        >
                            <CheckCircleIcon />
                        </IconButton>
                        <IconButton
                            aria-label="close"
                            style={{ color: 'firebrick' }}
                            onClick={props.handleCloseConfirm}
                        >
                            <CancelIcon />
                        </IconButton>
                    </>
                }
            >
            </Snackbar>
            {/* Profile Remove Confirm Snackbar */}
            <Snackbar
                open={props.open.profileConfirm}
                autoHideDuration={5000}
                onClose={props.handleCloseConfirm}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                message="Are you sure to delete profile?"
                className={classes.removeKeebSnack}
                action={
                    <>
                        <IconButton
                            aria-label="ok"
                            style={{ color: "lawngreen" }}
                            onClick={props.handleConfirm}
                        >
                            <CheckCircleIcon />
                        </IconButton>
                        <IconButton
                            aria-label="close"
                            style={{ color: 'firebrick' }}
                            onClick={props.handleCloseConfirm}
                        >
                            <CancelIcon />
                        </IconButton>
                    </>
                }
            >
            </Snackbar>
        </div >
    )
}

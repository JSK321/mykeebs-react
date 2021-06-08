// React
import React from 'react'
import { Link } from 'react-router-dom'
// Components
import SnackbarAlert from '../../components/SnackbarAlert'
// Material-UI Components
import { Container, Paper, TextField, Grid, Button } from '@material-ui/core'
// Material-UI Icons
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles';
// CSS
import './styles.css'

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    signInPaper: {
        width: 300,
        display: 'flex',
        justifyContent: 'center',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    signInBtn: {
        marginTop: '1rem',
        textAlign: 'center',
        marginBottom: '1rem',
    },
    registered: {
        marginBottom: '1rem',
        textAlign: 'center'
    }
}));


export default function SignInForm(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.signInPaper}>
            <div className={classes.signInForm}>
                <h2 style={{ textAlign: 'center' }}>Sign in</h2>
                <form noValidate autoComplete='off' onSubmit={props.handleFormSubmit}>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <EmailIcon />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Email"
                                    name='email'
                                    onChange={props.handleInputChange}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <VpnKeyIcon />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Password"
                                    name='password'
                                    type="password"
                                    onChange={props.handleInputChange}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.signInBtn}>
                        <Button
                            color="primary"
                            type='submit'
                            variant="contained"
                            style={{ textTransform: 'none' }}
                        >
                            Sign in
                        </Button>
                    </div>
                </form>
                <div className={classes.registered}>
                    <p className='registered'>
                        Not registered?
                    </p>
                    <Link
                        to='/register'
                        style={{ textDecoration: 'none' }}
                    >
                        <Button
                            color="primary"
                            variant="text"
                            style={{ textTransform: 'none' }}
                        >
                            Sign up here!
                        </Button>
                    </Link>
                </div>
                <SnackbarAlert
                    open={props.open}
                    handleClose={props.handleClose}
                />
            </div>
        </Paper>
    )
}

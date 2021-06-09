// React
import React from 'react'
import { Link } from 'react-router-dom'
// Material-UI Components
import { Paper, TextField, Grid, Button } from '@material-ui/core'
// Material-UI Icons
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import EmailIcon from '@material-ui/icons/Email'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import AddIcon from '@material-ui/icons/Add';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles'
// CSS
import './styles.css'

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    signUpPaper: {
        width: 300,
        display: 'flex',
        justifyContent: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        backgroundColor: "#0B0B0D",
        color: "#747C8C"
    },
    signInTextField: {
        "& .MuiFormLabel-root": {
            color: "#747C8C",
        },
        "& .MuiFormLabel-root.Mui-focused ": {
            color: "#BFBFBF",
        },
        "& .MuiInputBase-root": {
            color: "#747C8C"
        },
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
        <Paper className={classes.signUpPaper}>
            <div className={classes.signInForm}>
                <h2 style={{ textAlign: 'center' }}>Register</h2>
                <form noValidate autoComplete='off' onSubmit={props.handleFormSubmit}>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountBoxIcon />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Profile"
                                    name='name'
                                    onChange={props.handleInputChange}
                                    className={classes.signInTextField}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <EmailIcon />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Email"
                                    name='email'
                                    onChange={props.handleInputChange}
                                    className={classes.signInTextField}
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
                                    className={classes.signInTextField}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <p className="passHelperText">Password must be least 8 characters.</p>
                    </div>
                    <div className={classes.signInBtn}>
                        <Button
                            variant='contained'
                            color="primary"
                            type='submit'
                            style={{ textTransform: 'none', color: "#BFBFBF" }}
                        >
                            Create
                        </Button>
                    </div>
                </form>
                <div className={classes.registered}>
                    <p className='registered'>
                        Already registered?
                    </p>
                    <Link
                        to='/signin'
                        style={{ textDecoration: 'none' }}
                    >
                        <Button
                            color="primary"
                            variant="text"
                            style={{ textTransform: 'none', color: "#BFBFBF" }}
                        >
                            Sign in here!
                        </Button>
                    </Link>
                </div>
            </div>
        </Paper >
    )
}

// React
import React from 'react'
// Material-UI Components
import { Container, TextField, Grid, Button } from '@material-ui/core'
// Material-UI Icons
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import EmailIcon from '@material-ui/icons/Email'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import AddIcon from '@material-ui/icons/Add';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    signInContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    signInBtn: {
        marginTop: '1rem',
        textAlign: 'center'
    }
}));


export default function SignInForm(props) {
    const classes = useStyles();

    return (
        <Container className={classes.signInContainer}>
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
                            variant='outlined'
                            color="primary"
                            endIcon={<AddIcon />}
                            type='submit'
                        >
                            Create
                        </Button>
                    </div>
                </form>
            </div>
        </Container >
    )
}

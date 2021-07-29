// React
import React, { useState } from 'react'
// Components
import LoadingCircle from '../../components/LoadingCircle'
// Material-UI Components
import { TextField, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Button, Grid, Tooltip } from '@material-ui/core'
// Material-UI Icons
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import CloseIcon from '@material-ui/icons/Close';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 475,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: "#0B0B0D",
        color: "#747C8C"
    },
    media: {
        height: '300px',
    },
    updateInputField: {
        margin: 0,
        width: "100%",
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
    input: {
        display: 'none'
    },
    loadingCircle: {
        display: 'flex',
        justifyContent: 'center',
        margin: '2rem'
    },
    updateFormBtns: {
        display: 'flex',
        justifyContent: 'center',
    }
}));

export default function UpdateProfileForm(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="icon-button-file"
                            type="file"
                            onChange={props.handleUploadImage}
                        />
                        <label htmlFor="icon-button-file">
                            <Tooltip title="Update Photo" arrow>
                                <IconButton
                                    aria-label="update photo"
                                    component="span"
                                    onClick={props.handleImageUploadBtn}
                                    style={{ color: "#747C8C" }}
                                >
                                    <AddAPhotoIcon />
                                </IconButton>
                            </Tooltip>
                        </label>
                    </>
                }
                title='Update Profile'
            />
            {props.loading ?
                (
                    <div className={classes.loadingCircle}>
                        <LoadingCircle />
                    </div>
                )
                :
                (
                    <CardMedia
                        component="img"
                        alt={`${props.name} photo`}
                        className={classes.media}
                        image={props.image !== null ? props.image : 'https://i.imgur.com/DzshH5n.png'}
                        title="profile photo"
                    />
                )
            }
            <CardContent>
                <form autoComplete='off' onSubmit={props.handleFormSubmit}>
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                    >
                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                name="name"
                                placeholder="New username"
                                value={props.name !== null ? props.name : null}
                                margin="normal"
                                onChange={props.handleInputChange}
                                className={classes.updateInputField}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                name="email"
                                placeholder="New email"
                                value={props.email}
                                margin="normal"
                                onChange={props.handleInputChange}
                                className={classes.updateInputField}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Password"
                                name="password"
                                type='password'
                                placeholder="New password"
                                margin="normal"
                                onChange={props.handleInputChange}
                                className={classes.updateInputField}
                            />
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
            <CardActions className={classes.updateFormBtns}>
                <Button
                    type='submit'
                    endIcon={<SaveAltIcon />}
                    style={{ color: "#BFBFBF" }}
                    onClick={props.handleFormSubmit}
                >
                    Save
                </Button>
                <Button
                    endIcon={<CloseIcon />}
                    style={{ color: "#BFBFBF" }}
                    onClick={props.handleDeleteProfile}
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

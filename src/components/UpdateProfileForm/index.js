// React
import React, { useState } from 'react'
// Components
import UpdatePhotoPopover from '../../components/UpdatePhotoPopover'
import LoadingCircle from '../../components/LoadingCircle'
// Material-UI Components
import { TextField, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Button, Grid } from '@material-ui/core'
// Material-UI Icons
import PhotoIcon from '@material-ui/icons/Photo'
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import CloseIcon from '@material-ui/icons/Close';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 475,
        marginLeft: 'auto',
        marginRight: 'auto',
        // marginTop:"1rem"
    },
    media: {
        height: '300px',
    },
    updateInputField: {
        margin: 0,
        width: "100%"

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
        display:'flex',
        justifyContent:'center',
    }
}));

export default function UpdateProfileForm(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <>
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={props.handleUploadImage} />
                        <label htmlFor="icon-button-file">
                            <IconButton
                                aria-label="update photo"
                                component="span"
                                onClick={props.handleImageUploadBtn}
                            >
                                <PhotoIcon
                                    aria-owns={open ? 'mouse-over-popover' : undefined}
                                    aria-haspopup="true"
                                    onMouseEnter={handlePopoverOpen}
                                    onMouseLeave={handlePopoverClose}
                                />
                            </IconButton>
                        </label>
                    </>
                }
                title='Update Profile'
            />
            <UpdatePhotoPopover
                handlePopoverClose={handlePopoverClose}
                open={open}
                anchorEl={anchorEl}
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
                        image={props.image}
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
                                placeholder="Profile name"
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
                                placeholder="Profile email"
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
                                placeholder="Profile password"
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
                    onClick={props.handleFormSubmit}
                >
                    Save
                </Button>
                <Button
                    endIcon={<CloseIcon />}
                    onClick={props.handleDeleteProfile}
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

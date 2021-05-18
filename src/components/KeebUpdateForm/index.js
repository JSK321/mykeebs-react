// React
import React, { useState } from 'react'
// Components
import UpdatePhotoPopover from '../../components/UpdatePhotoPopover'
import LoadingCircle from '../../components/LoadingCircle'
// Material-UI Components
import { TextField, Button, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Grid } from '@material-ui/core'
// Material-UI Icons
import PhotoIcon from '@material-ui/icons/Photo'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
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
        height: '100%',
        width: '100%',
        objectFit: 'contain'
    },
    updateInputField: {
        margin: 0
    },
    input: {
        display: 'none'
    },
    loadingCircle: {
        display: 'flex',
        justifyContent: 'center',
        margin: '2rem'
    }
}));


export default function KeebUpdateForm(props) {
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
                title={props.name}
                subheader={`Designed by ${props.maker}`}
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
                        image={props.keebImage}
                        title="keeb photo"
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
                        <Grid item xs={6}>
                            <TextField
                                label="Color"
                                name="color"
                                placeholder="Case color"
                                value={props.color}
                                margin="normal"
                                onChange={props.handleInputChange}
                                className={classes.updateInputField}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Plate"
                                name="plate"
                                placeholder="Plate material"
                                value={props.plate}
                                margin="normal"
                                onChange={props.handleInputChange}
                                className={classes.updateInputField}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Switches"
                                name="switch"
                                placeholder="Switches"
                                value={props.switches}
                                margin="normal"
                                onChange={props.handleInputChange}
                                className={classes.updateInputField}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Switch Lube"
                                name="switchLube"
                                placeholder="Lube on switch"
                                value={props.switchLube}
                                margin="normal"
                                onChange={props.handleInputChange}
                                className={classes.updateInputField}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Switch Film"
                                name="switchFilm"
                                placeholder="Film name"
                                value={props.switchFilm}
                                margin="normal"
                                onChange={props.handleInputChange}
                                className={classes.updateInputField}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Spring Weight"
                                name="springWeight"
                                placeholder="Spring force"
                                value={props.springWeight}
                                margin="normal"
                                onChange={props.handleInputChange}
                                className={classes.updateInputField}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Spring Lube"
                                name="springLube"
                                placeholder="Lube on springs"
                                value={props.springLube}
                                margin="normal"
                                onChange={props.handleInputChange}
                                className={classes.updateInputField}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Stabilizers"
                                name="stabs"
                                placeholder="Stabilizer name"
                                value={props.stabs}
                                margin="normal"
                                onChange={props.handleInputChange}
                                className={classes.updateInputField}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Stabilizer Lube"
                                name="stabLube"
                                placeholder="Lube on stabilizers"
                                value={props.stabLube}
                                margin="normal"
                                onChange={props.handleInputChange}
                                className={classes.updateInputField}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Keyset"
                                name="keyset"
                                placeholder="Keyset name"
                                value={props.keyset}
                                margin="normal"
                                onChange={props.handleInputChange}
                                className={classes.updateInputField}
                            />
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    type="submit"
                    onClick={props.handleFormSubmit}
                    endIcon={<SystemUpdateAltIcon />}
                >
                    Update
                </Button>
                <Button
                    size="small"
                    color="primary"
                    onClick={props.handleDeleteKeeb}
                    endIcon={<RemoveCircleOutlineIcon />}
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

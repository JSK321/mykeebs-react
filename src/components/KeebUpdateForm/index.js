// React
import React from 'react'
// Components
import LoadingCircle from '../../components/LoadingCircle'
// Material-UI Components
import { TextField, Button, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Grid, Tooltip } from '@material-ui/core'
// Material-UI Icons
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import CloseIcon from '@material-ui/icons/Close';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 475,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: "#0B0B0D",
        color: "#747C8C"
    },
    cardTitle: {
        "& .MuiCardHeader-subheader": {
            color: "#747C8C"
        }
    },
    media: {
        height: '100%',
        width: '100%',
        objectFit: 'contain',
    },
    updateInputField: {
        margin: 0,
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


export default function KeebUpdateForm(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <>
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={props.handleUploadImage} />
                        <label htmlFor="icon-button-file">
                            <Tooltip title="Update Cover Photo" arrow>
                                <IconButton
                                    aria-label="update photo"
                                    component="span"
                                    style={{ color: "#747C8C" }}
                                    onClick={props.handleImageUploadBtn}
                                >
                                    <AddAPhotoIcon />
                                </IconButton>
                            </Tooltip>
                        </label>
                    </>
                }
                title={props.name}
                className={classes.cardTitle}
                subheader={`Designed by ${props.maker}`}
            />
            {props.loading ?
                (
                    <div className={classes.loadingCircle}>
                        <LoadingCircle />
                    </div>
                )
                :
                (
                    (props.keebImage !== null ?
                        <CardMedia
                            component="img"
                            alt={`${props.name} photo`}
                            className={classes.media}
                            image={props.keebImage}
                            title="keeb photo"
                        />
                        :
                        null
                    )
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
                                name="switches"
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
                                label="Spring"
                                name="springWeight"
                                placeholder="Spring name/force"
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
            <CardActions className={classes.updateFormBtns}>
                <Button
                    type="submit"
                    onClick={props.handleFormSubmit}
                    style={{ color: "#BFBFBF" }}
                    endIcon={<SystemUpdateAltIcon />}
                >
                    Save
                </Button>
                <Button
                    onClick={props.handleDeleteKeeb}
                    style={{ color: "#BFBFBF" }}
                    endIcon={<CloseIcon />}
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

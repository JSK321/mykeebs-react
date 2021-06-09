// React
import React from 'react'

// Material-UI Components
import { Card, CardHeader, CardContent, TextField, Button } from '@material-ui/core'
// Material-UI Icons
import KeyboardIcon from '@material-ui/icons/Keyboard';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    keebCard: {
        width: '22rem',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: "#0B0B0D",
        color: "#BFBFBF"
    },
    addPartsInput: {
        "& .MuiFormLabel-root": {
            color: "#747C8C",
        },
        "& .MuiFormLabel-root.Mui-focused ": {
            color: "#BFBFBF",
        },
        "& .MuiInputBase-root": {
            color: "#BFBFBF"
        },
    },
}));

export default function AddPartsForm(props) {
    const classes = useStyles();
    return (
        <Card className={classes.keebCard}>
            <CardHeader
                title={`Add Parts for ${props.keeb}`}
            />
            <CardContent>
                <form autoComplete='off' onSubmit={props.handleFormSubmit}>
                    <TextField
                        label="Switch"
                        name="switches"
                        placeholder="Switches"
                        fullWidth
                        margin="normal"
                        className={classes.addPartsInput}
                        onChange={props.handleInputChange}
                        required
                    />
                    <TextField
                        label="Switch Film"
                        name="switchFilm"
                        placeholder="Film name"
                        fullWidth
                        margin="normal"
                        className={classes.addPartsInput}
                        onChange={props.handleInputChange}
                    />
                    <TextField
                        label="Switch Lube"
                        name="switchLube"
                        placeholder="Lube on switch"
                        fullWidth
                        margin="normal"
                        className={classes.addPartsInput}
                        onChange={props.handleInputChange}
                    />
                    <TextField
                        label="Spring"
                        name="springWeight"
                        placeholder="Spring"
                        fullWidth
                        margin="normal"
                        className={classes.addPartsInput}
                        onChange={props.handleInputChange}
                        required
                    />
                    <TextField
                        label="Spring Lube"
                        name="springLube"
                        placeholder="Lube on springs"
                        fullWidth
                        margin="normal"
                        className={classes.addPartsInput}
                        onChange={props.handleInputChange}
                    />
                    <TextField
                        label="Stabilizer"
                        name="stabs"
                        placeholder="Stabilizer name"
                        fullWidth
                        margin="normal"
                        className={classes.addPartsInput}
                        onChange={props.handleInputChange}
                        required
                    />
                    <TextField
                        label="Stabilizer Lube"
                        name="stabLube"
                        placeholder="Lube on stabilizers"
                        fullWidth
                        margin="normal"
                        className={classes.addPartsInput}
                        onChange={props.handleInputChange}
                    />
                    <TextField
                        label="Keyset"
                        name="keyset"
                        placeholder="Keyset name"
                        fullWidth
                        margin="normal"
                        className={classes.addPartsInput}
                        onChange={props.handleInputChange}
                    />
                    <Button
                        type='submit'
                        size='large'
                        style={{ textTransform: 'none', color: "#BFBFBF" }}
                        endIcon={<KeyboardIcon />}
                    >
                        Create Keeb
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

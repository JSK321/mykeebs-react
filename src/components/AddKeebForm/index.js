// React
import React from 'react'

// Material-UI Components
import { Card, CardHeader, CardContent, TextField, Button } from '@material-ui/core'
// Material-UI Icons
import AddIcon from '@material-ui/icons/Add';
// Material-UI Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    keebCard: {
        width: '22rem',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: "#0B0B0D",
        color: "#747C8C"
    },
    addKeebInput: {
        "& .MuiFormLabel-root": {
            color: "#747C8C",
        },
        "& .MuiFormLabel-root.Mui-focused ": {
            color: "#BFBFBF",
        },
        "& .MuiInputBase-root": {
            color: "#747C8C"
        },
    }
}));

export default function AddKeebForm(props) {
    const classes = useStyles();
    return (
        <Card className={classes.keebCard}>
            <CardHeader
                title="Add Keeb"
            />
            <CardContent>
                <form autoComplete='off' onSubmit={props.handleFormSubmit}>
                    <TextField
                        label="Name"
                        name="name"
                        placeholder="Keeb name"
                        fullWidth
                        margin="normal"
                        className={classes.addKeebInput}
                        onChange={props.handleInputChange}
                        required
                    />
                    <TextField
                        label="Maker"
                        name="maker"
                        placeholder="Keeb designer"
                        fullWidth
                        margin="normal"
                        className={classes.addKeebInput}
                        onChange={props.handleInputChange}
                        required
                    />
                    <TextField
                        label="Angle"
                        name="angle"
                        placeholder="Keeb angle"
                        fullWidth
                        margin="normal"
                        className={classes.addKeebInput}
                        onChange={props.handleInputChange}
                        required
                    />
                    <TextField
                        label="Case"
                        name="case"
                        placeholder="Case material"
                        fullWidth
                        margin="normal"
                        className={classes.addKeebInput}
                        onChange={props.handleInputChange}
                        required
                    />
                    <TextField
                        label="Color"
                        name="color"
                        placeholder="Case Color"
                        fullWidth
                        margin="normal"
                        className={classes.addKeebInput}
                        onChange={props.handleInputChange}
                        required
                    />
                    <TextField
                        label="Plate"
                        name="plate"
                        placeholder="Plate material"
                        fullWidth
                        margin="normal"
                        className={classes.addKeebInput}
                        onChange={props.handleInputChange}
                        required
                    />
                    <Button
                        type='submit'
                        size='large'
                        endIcon={<AddIcon />}
                        style={{ textTransform: 'none', color: "#BFBFBF" }}
                    >
                        Add parts
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

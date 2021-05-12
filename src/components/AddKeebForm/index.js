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
        marginRight: 'auto'
    },
    sizeSelect: {
        width: '100%'
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
                        onChange={props.handleInputChange}
                        required
                    />
                    <TextField
                        label="Maker"
                        name="maker"
                        placeholder="Keeb designer"
                        fullWidth
                        margin="normal"
                        onChange={props.handleInputChange}
                        required
                    />
                    <TextField
                        label="Angle"
                        name="angle"
                        placeholder="Keeb angle"
                        fullWidth
                        margin="normal"
                        onChange={props.handleInputChange}
                        required
                    />
                    <TextField
                        label="Case"
                        name="case"
                        placeholder="Case material"
                        fullWidth
                        margin="normal"
                        onChange={props.handleInputChange}
                        required
                    />
                    <TextField
                        label="Color"
                        name="color"
                        placeholder="Case Color"
                        fullWidth
                        margin="normal"
                        onChange={props.handleInputChange}
                        required
                    />
                    <TextField
                        label="Plate"
                        name="plate"
                        placeholder="Plate material"
                        fullWidth
                        margin="normal"
                        onChange={props.handleInputChange}
                        required
                    />
                    <Button
                        type='submit'
                        color="primary"
                        endIcon={<AddIcon />}
                    >
                        ADD PARTS
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

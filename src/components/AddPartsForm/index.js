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
                        placeholder="Switch name"
                        fullWidth
                        margin="normal"
                        onChange={props.handleInputChange}
                        required
                    />
                    <TextField
                        label="Switch Film"
                        name="switchFilm"
                        placeholder="Film name"
                        fullWidth
                        margin="normal"
                        onChange={props.handleInputChange}
                    />
                    <TextField
                        label="Switch Lube"
                        name="switchLube"
                        placeholder="Lube name"
                        fullWidth
                        margin="normal"
                        onChange={props.handleInputChange}
                    />
                    <TextField
                        label="Spring Force"
                        name="springWeight"
                        placeholder="Force weight"
                        fullWidth
                        margin="normal"
                        onChange={props.handleInputChange}
                        required
                    />
                    <TextField
                        label="Spring Lube"
                        name="springLube"
                        placeholder="Lube name"
                        fullWidth
                        margin="normal"
                        onChange={props.handleInputChange}
                    />
                    <TextField
                        label="Stabilizer"
                        name="stabs"
                        placeholder="Stabilizer name"
                        fullWidth
                        margin="normal"
                        onChange={props.handleInputChange}
                        required
                    />
                    <TextField
                        label="Stabilizer Lube"
                        name="stabLube"
                        placeholder="Lube name"
                        fullWidth
                        margin="normal"
                        onChange={props.handleInputChange}
                    />
                    <TextField
                        label="Keyset"
                        name="keyset"
                        placeholder="Keyset name"
                        fullWidth
                        margin="normal"
                        onChange={props.handleInputChange}
                    />
                    <Button
                        type='submit'
                        color="primary"
                        endIcon={<AddIcon />}
                    >
                        CREATE KEEB
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

// React
import React from 'react'
// Material-UI Components
import { TextField, InputAdornment, } from '@material-ui/core'
// Material-UI Icons
import SearchIcon from '@material-ui/icons/Search';
// Material-UI Styles
import { makeStyles, } from '@material-ui/core/styles'
// CSS
import './styles.css'
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));
export default function SearchKeebInput() {
    const classes = useStyles();

    return (
        <div className='searchDiv'>
            <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label={"Search"}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    )
}

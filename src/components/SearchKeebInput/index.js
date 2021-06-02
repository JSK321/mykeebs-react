// React
import React, { useRef } from 'react'
// Material-UI Components
import { TextField, InputAdornment } from '@material-ui/core'
// Material-UI Lab
import Autocomplete from '@material-ui/lab/Autocomplete';
// Material-UI Icons
import SearchIcon from '@material-ui/icons/Search';
// Material-UI Styles
import { makeStyles, } from '@material-ui/core/styles'
// CSS
import './styles.css'
const useStyles = makeStyles((theme) => ({
    margin: {
        backgroundColor: "aliceblue",
        width: 300
    },
    paper: {
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        // height: '200px',
        // overflow:'auto'
    },
    keebList: {
        width: '150px'
    }
}));
export default function SearchKeebInput(props) {
    const classes = useStyles();
    return (
        <div className='searchDiv'>
            <form onSubmit={props.handleSearch}>
                <Autocomplete
                    freeSolo
                    id='searchInput'
                    disableClearable
                    options={props.keebs.map((keeb) => keeb.name)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            className={classes.margin}
                            margin="normal"
                            variant="outlined"
                            onChange={props.handleSearchInput}
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                />
            </form>
        </div >
    )

}
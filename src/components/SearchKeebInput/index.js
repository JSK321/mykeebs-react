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
    searchField: {
        backgroundColor: "#747C8C",
        width: 300,
        "& .MuiInputBase-root": {
            color: "#BFBFBF"
        },
    },
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
                            className={classes.searchField}
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
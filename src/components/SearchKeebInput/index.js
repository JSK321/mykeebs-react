// React
import React, { useState, useEffect } from 'react'
// API
import API from '../../utils/API'
// Material-UI Components
import { TextField, InputAdornment, Slide } from '@material-ui/core'
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
        backgroundColor: "#212026",
        width: 300,
        "& .MuiInputBase-root": {
            color: "#747C8C"
        },
        "@media (max-width: 400px)": {
            width: 150
        },
    },
}));

export default function SearchKeebInput(props) {
    const classes = useStyles();

    const [keebInfo, setKeebInfo] = useState({
        keebs: [],
    })

    const [list, setList] = useState({
        keebList: []
    })

    const [searchState, setSearchState] = useState({
        search: ""
    })

    useEffect(() => {
        loadKeebInfo()
    }, [])

    function loadKeebInfo() {
        API.getAllKeebs().then(res => {
            setKeebInfo({
                keebs: res
            })
            setList({
                keebList: res
            })
        })
    }

    const handleSearchInput = event => {
        event.preventDefault()
        let keyword = event.target.value
        let filtered = keebInfo.keebs.filter(keebObj => {
            return (
                keebObj.name.toLowerCase().indexOf(keyword) > -1
            )
        })

        if (keyword === "") {
            loadKeebInfo()
            checkScale()
        }

        setList({
            keebList: filtered
        })

        setSearchState({
            search: keyword
        })
    }

    const handleSearch = async event => {
        event.preventDefault();
        let value = event.target.children[0].children[0].children[0].children[1].value
        setSearchState({
            serach: value
        })
        let search = await API.getKeeb(value)

        if (search !== null) {
            checkKeeb(search)
        }
    }

    function checkKeeb(keeb) {
        let keebs = keebInfo.keebs
        for (let i = 0; i < keebs.length; i++) {
            if (keebs[i].name !== keeb.name) {
                let keebCard = document.getElementById(keebs[i].name)
                let keebSearch = document.getElementById(keeb.name)
                let searchBtn = keebSearch.lastChild.children[1]

                if (keebCard.style.transform === "" || keebCard.style.transform === 'scale(1)') {
                    keebCard.style.transitionDuration = '1s'
                    keebCard.style.transitionProperty = 'transform'
                    keebCard.style.transform = 'scale(0)'
                    keebSearch.style.transform = 'scale(1)'
                    searchBtn.style.transform = 'scale(1)'
                    keebSearch.scrollIntoView({ behavior: 'smooth' })
                }
            }
        }
    }

    function checkScale() {
        let keebs = keebInfo.keebs
        for (let i = 0; i < keebs.length; i++) {
            let keebCard = document.getElementById(keebs[i].name)
            let searchBtn = keebCard.lastChild.children[1]

            if (keebCard.style.transform === 'scale(0)') {
                keebCard.style.transform = 'scale(1)'
            }

            if (searchBtn.style.transform === 'scale(1)') {
                searchBtn.style.transform = 'scale(0)'
            } else {
                searchBtn.style.transform = 'scale(0)'
            }
        }
    }

    return (
        <div className='searchDiv'>
            <Slide
                in={props.searchBar}
                timeout={500}
                direction="down"
            >
                <form onSubmit={handleSearch}>
                    <Autocomplete
                        freeSolo
                        id='searchInput'
                        disableClearable
                        options={keebInfo.keebs.map((keeb) => keeb.name)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                className={classes.searchField}
                                variant="outlined"
                                onChange={handleSearchInput}
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
            </Slide>
        </div >
    )

}
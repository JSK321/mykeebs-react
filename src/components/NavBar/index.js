// React
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// API
import API from '../../utils/API'
// Components
import SearchKeebInput from '../../components/SearchKeebInput'
// Material-UI Components
import { AppBar, Toolbar, IconButton, MenuItem, Menu } from '@material-ui/core';
// Material-UI Icons
import MenuIcon from '@material-ui/icons/Menu';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
// Materiaul-UI Styles
import { makeStyles } from '@material-ui/core/styles';
// CSS
import './styles.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: '5.5rem'
    },
    navBar: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#0B0B0D',
        paddingBottom: '.5rem',
    },
    menu: {
        "& .MuiPaper-root": {
            backgroundColor: '#212026',
            color: '#747C8C'
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    search: {
        flexGrow: 1
    },
    iconBtn: {
        color: '#747C8C'
    },
    profileIcon: {
        color: '#747C8C'
    },
}));

export default function MenuAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token')
        API.getProfile(token).then(res => {
            if (res !== null) {
                setAuth(true)
            } else {
                setAuth(false)
            }
        })
    }, [])

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut = event => {
        event.preventDefault();
        localStorage.removeItem('token')
        setAuth(false)
        setAnchorEl(null);
        window.location.href = '/'
    }

    return (
        <div className={classes.root}>
            <AppBar position="absolute">
                <Toolbar className={classes.navBar}>
                    <Link to='/' className="homeLink">
                        Keebs
                    </Link>
                    <div className={classes.search}>
                        <SearchKeebInput

                        />
                    </div>
                    {auth === true ?
                        <Link
                            to='/profile'
                        >
                            <IconButton
                                className={classes.profileIcon}
                            >
                                <AccountBoxIcon />
                            </IconButton>
                        </Link>
                        :
                        null
                    }
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        className={classes.iconBtn}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        className={classes.menu}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            <Link
                                to='/about'
                                className='appBarLink'>
                                About
                                </Link>
                        </MenuItem>
                        {auth === true ?
                            <MenuItem onClick={handleClose}>
                                <Link
                                    to='/addkeebform'
                                    className='appBarLink'
                                >
                                    Add keeb
                                </Link>
                            </MenuItem>
                            :
                            null
                        }
                        {auth === false ?
                            <MenuItem onClick={handleClose}>
                                <Link
                                    to='/signin'
                                    className='appBarLink'
                                >
                                    Sign in
                                    </Link>
                            </MenuItem>
                            :
                            <MenuItem onClick={handleLogOut}>
                                Sign out
                                </MenuItem>
                        }
                        {auth === false ?
                            <MenuItem onClick={handleClose}>
                                <Link
                                    to='/register'
                                    className='appBarLink'
                                >
                                    Register
                                    </Link>
                            </MenuItem>
                            :
                            null
                        }
                    </Menu>
                </Toolbar>
            </AppBar>
        </div >
    );
}

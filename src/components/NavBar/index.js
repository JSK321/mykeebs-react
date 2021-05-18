// React
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// API
import API from '../../utils/API'
// Material-UI Components
import { AppBar, Toolbar, IconButton, MenuItem, Menu } from '@material-ui/core';
// Material-UI Icons
import MenuIcon from '@material-ui/icons/Menu';
// Materiaul-UI Styles
import { makeStyles } from '@material-ui/core/styles';
// CSS
import './styles.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: '4rem'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    iconBtn: {
        position: "absolute",
        right: 0,
        top: '5px',
        marginRight: '1.3rem'
    },
    menuIcon: {
        position: 'absolute',
        right: '35px',
        top: '13px'
    }
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
        window.location.href='/'
    }

    return (
        <div className={classes.root}>
            <AppBar position="absolute">
                <Toolbar>
                    <Link to='/' className="homeLink">
                        Keebs
                    </Link>
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            className={classes.iconBtn}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
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
                            {auth === true ?
                                <MenuItem onClick={handleClose}>
                                    <Link
                                        to='/profile'
                                        className='appBarLink'
                                    >
                                        Profile
                                </Link>
                                </MenuItem>
                                :
                                null
                            }
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
                    </div>
                </Toolbar>
            </AppBar>
        </div >
    );
}

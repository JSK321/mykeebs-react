// React
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// Material-UI Components
import { AppBar, Toolbar, IconButton, MenuItem, Menu, ListItem, ListItemIcon, ListItemText, Button, Typography } from '@material-ui/core';
// Material-UI Icons
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SendIcon from '@material-ui/icons/Send';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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
    menuItem: {
        // padding: 0,
        display: 'flex',
        justifyContent: 'center'
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
        if (token !== null) {
            setAuth(true)
        }
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
                                <MenuItem onClick={handleClose} className={classes.menuItem}>
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
                                <MenuItem onClick={handleClose} className={classes.menuItem}>
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
                                <MenuItem onClick={handleClose} className={classes.menuItem}>
                                    <Link
                                        to='/signin'
                                        className='appBarLink'
                                    >
                                        Sign in
                                    </Link>
                                </MenuItem>
                                :
                                <MenuItem onClick={handleLogOut} className={classes.menuItem}>
                                    Sign out
                                </MenuItem>
                            }
                            {auth === false ?
                                <MenuItem onClick={handleClose} className={classes.menuItem}>
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

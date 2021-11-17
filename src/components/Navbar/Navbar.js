import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'
import { useHistory, useLocation } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';


const Navbar = ({ open, handleOpen, handleClose }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [location])

    const logout = () => {
        dispatch({type: 'LOGOUT'});

        history.push('/')
        setUser(null)
    }

    console.log(user)

    return (
        <>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.brandContainer}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        </IconButton>
                        <Typography component={Link} to="/" variant="h6" className={classes.title}>
                            BLOG-F
                        </Typography>
                    </div>

                    <div className={classes.userPart}>
                        {user?.result ? (
                            <div className={classes.profile}>
                                <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                                <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                            </div>
                        ) : (
                            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar

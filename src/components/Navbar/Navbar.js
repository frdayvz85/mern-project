import React from 'react'
import useStyles from './styles'
import { AppBar, Toolbar, IconButton, Typography, Button, Container } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import Modal from '@material-ui/core/Modal';
import Form from '../Form/Form';


const Navbar = ({ open, handleOpen, handleClose}) => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        BLOG-F
                    </Typography>
                    {/* <Button onClick={handleOpen} type="button" color="inherit" className={classes.addBtn} spacing={2}><AddIcon /> New Post</Button> */}
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Container>
                    <Container>
                        <Container>
                            <Form />
                        </Container>
                    </Container>
                </Container>
            </Modal>
        </>
    )
}

export default Navbar

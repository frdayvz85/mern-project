import { useEffect, useState } from 'react';
import './App.css';
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Grow, Grid } from '@material-ui/core';
import useStyles from './styles'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import { useDispatch } from 'react-redux';
import { getPosts } from './redux/actions/posts'
import Navbar from './components/Navbar/Navbar';

function App() {
  const [currentId, setCurrentId] = useState(null);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])



  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.app}>
      <Navbar open={open} handleOpen={handleOpen} handleClose={handleClose} />
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form open={open} handleClose={handleClose} currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
}

export default App;

import React from 'react'
import Post from './Post/Post'
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './styles';

const Posts = ({setCurrentId}) => {  
    const posts = useSelector(state => state.posts);
    // console.log(posts)
    const classes = useStyles()
    return (
        <Grid container className={classes.postContainer} spacing={2} m={1}>
            {
                !posts.length ? <CircularProgress /> : (
                    posts.map(post =>(
                        <Post key={post._id} post={post} setCurrentId={setCurrentId} />
                    ))
                )
            }

        </Grid>
    )
}

export default Posts

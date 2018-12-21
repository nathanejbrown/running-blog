import axios from '../../axios-posts';
import * as actionTypes from './actionTypes';

export const fetchPostsStart = () => {
    return {
      type: actionTypes.FETCH_POSTS_START
    }
  }

export const fetchPostsSuccess = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        posts: posts
    }
}

export const newPostSuccess = (post) => {
  return {
    type: actionTypes.NEW_POST_SUCCESS,
    post: post
  }
}

export const fetchNewestPost = () => {
    return dispatch => {
      dispatch(fetchPostsStart())
      axios.get('posts/newest-post')
      .then(res => {
        dispatch(fetchPostsSuccess(res.data))
      })
      .catch(err => {
        console.log(err)
      });
    }
  }

export const createNewPost = (post) => {
  const newPost = {
    title: post.title,
    body: post.body
  }
  return dispatch => {
    axios.post('posts/new', newPost)
    .then(res => {
      console.log(res)
      dispatch(newPostSuccess(res.data[0]))
    })
    .catch(err => {
      console.log(err)
    })
  }
}
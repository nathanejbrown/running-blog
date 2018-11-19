import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: null,
    loading: false
}

const fetchPostsStart = (state, action) => {
    return updateObject(state, {loading: true});
}

const fetchPostsSuccess = (state, action) => {
    return updateObject(state, {
        posts: action.posts,
        loading: false
      });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FETCH_POSTS_START: return fetchPostsStart(state, action);
      case actionTypes.FETCH_POSTS_SUCCESS: return fetchPostsSuccess(state, action);
      default: return state;
    }
}

export default reducer; 

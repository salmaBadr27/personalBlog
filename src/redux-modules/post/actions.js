import {
  GET_ALL_POSTS,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAIL,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAIL,
  EDIT_POST,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAIL,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL
} from "./constants";

export const getAllPosts = () => ({
  type: GET_ALL_POSTS
});
export const getAllPostsSuccess = payload => ({
  type: GET_ALL_POSTS_SUCCESS,
  payload
});
export const getAllPostsFail = payload => ({
  type: GET_ALL_POSTS_FAIL,
  payload
});
export const addPost = payload => ({
  type: ADD_POST,
  payload
});
export const addPostSuccess = payload => ({
  type: ADD_POST_SUCCESS,
  payload
});
export const addPostFail = payload => ({
  type: ADD_POST_FAIL,
  payload
});
export const editPost = () => ({
  type: EDIT_POST
});
export const editPostSuccess = payload => ({
  type: EDIT_POST_SUCCESS,
  payload
});
export const editPostFail = payload => ({
  type: EDIT_POST_FAIL,
  payload
});
export const deletePost = payload => ({
  type: DELETE_POST,
  payload
});
export const deletePostSuccess = payload => ({
  type: DELETE_POST_SUCCESS,
  payload
});
export const deletePostFail = payload => ({
  type: DELETE_POST_FAIL,
  payload
});

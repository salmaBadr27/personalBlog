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

const initialState = {
  posts: {
    data: [],
    error: "",
    isWaiting: false
  },
  addPost: {
    data: {},
    error: "",
    isWaiting: false
  },
  editPost: {
    data: {},
    error: "",
    isWaiting: false
  },
  deletePost: {
    data: {},
    error: "",
    isWaiting: false
  }
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: { ...initialState.posts, isWaiting: true }
      };
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        posts: { ...initialState.posts, data: action.payload }
      };
    case GET_ALL_POSTS_FAIL:
      return {
        ...state,
        posts: {
          ...initialState.posts,
          error: action.payload
        }
      };
    case ADD_POST:
      return {
        ...state,
        addPost: { ...initialState.addPost, isWaiting: true }
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        addPost: { ...initialState.addPost, data: action.payload }
      };
    case ADD_POST_FAIL:
      return {
        ...state,
        addPost: {
          ...initialState.addPost,
          error: action.payload
        }
      };
    case EDIT_POST:
      return {
        ...state,
        signup: { ...initialState.editPost, isWaiting: true }
      };
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        signup: { ...initialState.editPost, data: action.payload }
      };
    case EDIT_POST_FAIL:
      return {
        ...state,
        signup: {
          ...initialState.editPost,
          error: action.payload
        }
      };
    case DELETE_POST:
      return {
        ...state,
        deletePost: { ...initialState.deletePost, isWaiting: true }
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        deletePost: { ...initialState.deletePost, data: action.payload }
      };
    case DELETE_POST_FAIL:
      return {
        ...state,
        deletePost: {
          ...initialState.deletePost,
          error: action.payload
        }
      };
    default:
      return state;
  }
};
export default postReducer;

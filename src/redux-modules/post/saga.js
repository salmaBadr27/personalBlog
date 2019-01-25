import { put, takeEvery } from "redux-saga/effects";
import {
  getAllPostsSuccess,
  getAllPostsFail,
  addPostSuccess,
  addPostFail,
  deletePostSuccess,
  deletePostFail
} from "./actions";
import { GET_ALL_POSTS, ADD_POST, DELETE_POST } from "./constants";
import { request } from "../../utils/request";
import { getAllPostsApi, addPost, deletePost } from "./api";

export function* getAllPosts() {
  try {
    console.log("entered post saga");
    var response = yield request(getAllPostsApi());
    console.log("data in post saga", response.data);

    yield put(getAllPostsSuccess(response.data));
  } catch (error) {
    console.log("error in post saga", error);
    yield put(getAllPostsFail(error));
  }
}
export function* addPosts({ payload }) {
  try {
    console.log("entered addPost saga");

    const response = yield request(addPost(payload));
    console.log("data in addPost saga", response.data);
    yield put(addPostSuccess(response.data));
  } catch (error) {
    console.log("error in addPost saga", error);
    yield put(addPostFail(error));
  }
}
export function* deletePosts({ payload }) {
  try {
    console.log("entered deletePost saga");

    const response = yield request(deletePost(payload));
    console.log("data in deletePost saga", response.data);
    yield put(deletePostSuccess(response.data));
  } catch (error) {
    console.log("error in deletePost saga", error);
    yield put(deletePostFail(error));
  }
}

export function* watchFetchPosts() {
  yield takeEvery(GET_ALL_POSTS, getAllPosts);
}
export function* watchaddPost() {
  yield takeEvery(ADD_POST, addPosts);
}
export function* watchdeletePost() {
  yield takeEvery(DELETE_POST, deletePosts);
}

export const getAllPostsApi = () => ({
  url: "http://localhost:3000/allposts",
  method: "get"
});

export const addPost = newPost => ({
  url: "http://localhost:3000/allposts",
  method: "post",
  data: newPost
});

export const deletePost = id => ({
  url: "http://localhost:3000/allposts/" + id,
  method: "delete"
});

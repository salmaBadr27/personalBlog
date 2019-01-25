export const handleAddPost = (e, newPost, addPosts) => {
  e.preventDefault();
  newPost = {
    title: e.target.title.value,
    author: e.target.auth.value,
    subject: e.target.sub.value
  };
  if (newPost.auth === "" || newPost.sub === "" || newPost.title === "") {
    alert("fill the form correctly please");
  } else {
    addPosts(newPost);
  }
};

export const handleDeletePost = (id, deletePost) => {
  deletePost(id);
};

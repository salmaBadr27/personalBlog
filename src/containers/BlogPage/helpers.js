export const handleAddPost = (e, newPost, addPosts) => {
  e.preventDefault();
  newPost = {
    title: e.target.title.value,
    author: e.target.auth.value,
    subject: e.target.sub.value
  };
  if (newPost.author === "" || newPost.subject === "" || newPost.title === "") {
    alert("fill the form correctly please");
  } else {
    addPosts(newPost);
  }
};

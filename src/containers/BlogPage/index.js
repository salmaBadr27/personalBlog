import React from "react";
import Welcome from "../../components/Header";
import Form from "../../components/Form";
import { formFields } from "./constants";
import PostList from "../../components/PostList";
import {
  getAllPosts,
  addPost,
  deletePost
} from "../../redux-modules/post/actions";
import { connect } from "react-redux";
import { handleAddPost } from "./helpers";
const styledContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  padding: "0",
  margin: "0",
  boxSizing: "border-box"
};

class BlogPage extends React.Component {
  componentWillMount(props) {
    this.props.getAllPosts();
  }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.addPosts.data || nextProps.deletePost) {
  //     this.props.getAllPosts();
  //   }
  // }
  render(props) {
    if (this.props.allPosts.isWaiting) {
      return <h1>LOADING</h1>;
    }
    var ourObjects = this.props.allPosts;
    if (ourObjects.error) {
      return <h1>Some thing unexpected happened</h1>;
    }
    return (
      <div style={styledContainer}>
        <Welcome />
        <Form
          id="add Post"
          fields={formFields}
          onSubmit={e =>
            handleAddPost(e, this.props.addPost.data, this.props.addPosts)
          }
        />
        <PostList
          items={this.props.allPosts}
          onDeleteClick={id => this.props.deletePost(id)}
        />
      </div>
    );
  }
}

const mapStateToProps = globalState => ({
  allPosts: globalState.postReducer.posts.data,
  addPost: globalState.postReducer.addPost,
  deletePosts: globalState.postReducer.deletePost
});
const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts()),
  addPosts: payload => dispatch(addPost(payload)),
  deletePost: payload => dispatch(deletePost(payload))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPage);

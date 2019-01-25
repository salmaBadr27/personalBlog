import React from "react";
import PostItem from "../PostListItem";
const StyledList = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "20px",
  width: "90%"
};
const headings = {
  color: "#800080",
  textTransform: "capitalize"
};
const title = {
  color: "#800080",
  fontSize: "30px",
  textTransform: "capitalize"
};
const danger = {
  color: "#fff",
  backgroundColor: "#C7254E",
  borderRadius: "2px",
  border: "1px solid %f2f2f2",
  fontSize: "13px",
  fontWeight: "bold",
  margin: "11px 4px",
  padding: "5px 16px",
  textAlign: "center"
};
const PostList = props => (
  <div style={StyledList}>
    {props.items.map(e => {
      return (
        <PostItem key={e.id}>
          <div style={title}>{e.title}</div>
          <div style={headings}>Written By: {e.author}</div>
          <p>{e.subject}</p>
          <div style={danger} onClick={() => props.onDeleteClick(e.id)}>
            Delete
          </div>
        </PostItem>
      );
    })}
  </div>
);

export default PostList;

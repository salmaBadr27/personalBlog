import React from "react";

const styledItem = {
  display: "flex",
  boxSizing: "border-box",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  fontSize: "20px",
  fontFamily: "cursive",
  border: "1px solid #A9A9A9",
  width: "100%",
  padding: "5px 10px"
};
const PostItem = props => <div style={styledItem} {...props} />;
export default PostItem;

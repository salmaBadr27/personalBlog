import React from "react";
import PropTypes from "prop-types";
import Input from "../Input";
import Button from "../Button";

const styledForm = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "cursive",
  justifyContent: "center"
};
const styledTextArea = {
  width: "150%",
  height: "100px"
};
const Form = props => (
  <form style={styledForm} onSubmit={props.onSubmit} id={props.id}>
    {props.fields.map(e => {
      return (
        <div key={e.id}>
          <Input {...e} />
        </div>
      );
    })}
    <textarea style={styledTextArea} placeholder="subject" name="sub" />
    <Button>Add Post</Button>
  </form>
);
Form.propType = {
  id: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node
};
Form.defaultProps = {
  fields: []
};
export default Form;

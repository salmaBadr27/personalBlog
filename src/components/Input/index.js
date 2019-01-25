import React from "react";
import PropTypes from "prop-types";

const styledInput = {
  borderRadius: "5px",
  padding: "10px 5px",
  marginTop: "3px",
  marginBottom: "3px"
};

const Input = props => <input style={styledInput} {...props} />;

export default Input;
Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

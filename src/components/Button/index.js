import React from "react";
import PropTypes from "prop-types";

const styledButton = {
  color: "#fff",
  backgroundColor: "#4CAF50",
  fontSize: "13px",
  fontWeight: "bold",
  margin: "11px 4px",
  padding: "5px 16px",
  textAlign: "center",
  borderRadius: "2px"
};

const Button = props => (
  <button style={styledButton} {...props}>
    {props.children}
  </button>
);
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};
export default Button;

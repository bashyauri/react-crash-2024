import React from "react";
import PropTypes from "prop-types";

function Card({ children, bg }) {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.object,
  bg: PropTypes.string,
};
Card.defaultProps = {
  bg: "bg-gray-100",
};

export default Card;

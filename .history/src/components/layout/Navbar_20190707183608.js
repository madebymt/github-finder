import React, { Component } from "react";
import PropTypes from "prop-types";

const Navbar = () => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={this.props.icon} />
        {this.props.title}
      </h1>
    </div>
  );
};

Navbar.defaultProps = {
  title: "github",
  icon: "fab fa-github"
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;

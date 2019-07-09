import React, { Component } from "react";

export class Navbar extends Component {
  static defaultProps = {
    title: "github",
    icon: "fab fa-github"
  };
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string
  };
  render() {
    return (
      <div className='navbar bg-primary'>
        <h1>
          <i class={this.props.icon} />
          {this.props.title}
        </h1>
      </div>
    );
  }
}

export default Navbar;

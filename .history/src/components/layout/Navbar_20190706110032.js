import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div className='navbar bg-primary'>
        <i class={this.props.icon} />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Navbar;

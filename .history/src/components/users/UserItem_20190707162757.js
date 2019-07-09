import React, { Component } from "react";
class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      login: "",
      avatar_url: "https://www.udemy.com/modern-react-front-to-back/",
      html_url: "https:google.com"
    };
  }
  render() {
    return (
      <div className='card text-center'>
        <img src={this.state.avatar_url} class='round-img' alt='' />
      </div>
    );
  }
}

export default UserItem;

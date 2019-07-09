import React, { Component } from "react";
class UserItem extends Component {
  state = {
    id: "",
    login: "",
    avatar_url: "https://www.udemy.com/modern-react-front-to-back/",
    html_url: "https:google.com"
  };

  render() {
    const { id, login, avatar_url, html_url } = this.state;
    return (
      <div className='card text-center'>
        <img src={this.state.avatar_url} className='round-img' alt='' />
      </div>
    );
  }
}

export default UserItem;

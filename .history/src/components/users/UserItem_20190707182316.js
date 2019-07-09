import React, { Component } from "react";
class UserItem extends Component {
  render() {
    const { id, login, avatar_url, html_url } = this.props.user;
    return (
      <div className='card text-center'>
        <p>{login}</p>
        <img src={avatar_url} className='round-img' alt='' />
      </div>
    );
  }
}

export default UserItem;

import React, { Component } from "react";
class UserItem extends Component {
  render() {
    const { id, login, avatar_url, html_url } = this.props.users;
    return (
      <div className='card text-center'>
        <img src={this.state.avatar_url} className='round-img' alt='' />
      </div>
    );
  }
}

export default UserItem;

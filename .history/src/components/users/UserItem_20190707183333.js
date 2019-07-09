import React from "react";
const UserItem = props => {
  const { id, login, avatar_url, html_url } = props.user;
  return (
    <div className='card text-center'>
      <p>{login}</p>
      <img src={avatar_url} className='round-img' alt='' />
    </div>
  );
};

export default UserItem;

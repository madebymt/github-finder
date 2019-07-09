import React from "react";
import PropTypes from "prop-types";
const UserItem = ({ user: { id, login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <p>{login}</p>
      <img src={avatar_url} className='round-img' alt='' />

      <a href={html_url} target='_blank'>
        <button className='btn'>See more</button>
      </a>
    </div>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;

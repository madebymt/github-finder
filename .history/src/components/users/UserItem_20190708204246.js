import React from "react";
import PropTypes from "prop-types";
const UserItem = ({ user: { id, login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <p>{login}</p>
      <img src={avatar_url} className='round-img' alt='' />
      <button className='btn' href='{html_url}'>
        See more
      </button>
    </div>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;

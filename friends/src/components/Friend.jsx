import React from 'react';

const Friend = props => {
  return (
    <>
      <div className="friend">
        <p>{props.friend.name}</p>
      </div>
    </>
  );
};

export default Friend;

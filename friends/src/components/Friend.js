import React from 'react';
// import { Route }
// Needed when I create Navlink to more info

const Friend = props => {
  const { id, name, age, email } = props.friend;
  return (
    <>
      <p>This is friend data</p>
      <p>{id}</p>
      <p>{name}</p>
      <p>{age}</p>
      <p>{email}</p>
    </>
  );
};

export default Friend;

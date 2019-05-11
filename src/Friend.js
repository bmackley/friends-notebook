import React from 'react';

function Friend(props) {
  return(
    <div>
      <h1>{props.name}</h1>
      <p>Address {props.address}</p>
      <p>Phone {props.phone}</p>
      <button id={props.phone} onClick={props.removeFriend}>Delete</button>
    </div>
  )
}

export default Friend

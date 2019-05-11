import React from 'react';

function Friend(props) {
  return(
    <div>
      <h1>{props.name}</h1>
      <p>{props.address}</p>
      <p>{props.phone}</p>
    </div>
  )
}

export default Friend

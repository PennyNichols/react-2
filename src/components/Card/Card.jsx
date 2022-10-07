import React from 'react';

const Card = (props) => {
  return (
    <div style ={{border:'solid 2px blue', margin: '5px'}}>
        <h4>{props.title}</h4>
        <img src="" alt="" />
        <p>{props.desc}</p>
    </div>
  )
}

export default Card
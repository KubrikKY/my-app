import React from 'react';

export default (props) => {
  return (
    <div className="car-card">
      <h1>{props.name}</h1>
      <h2>Year: {props.year}</h2>
      <div>Color: {props.color}</div>
    </div>
  );
};

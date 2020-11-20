import React from 'react';

export const DialButton = props => {
  return <button className="DialButton" onClick={() => props.onClick(props.value)}>{props.value}</button>;
};

export const CleanButton = props => {
  return <button className="DialButton C-button" onClick={() => props.onClick()}>C</button>;
};

export const Display = props => {
  return <div className="App-display">{props.content}</div>
};

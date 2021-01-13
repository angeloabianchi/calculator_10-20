import React from 'react';

export const DialButton = props => {
  const handleClick = () => {
    props.onClick(props.value)
  };
  const classes = ["DialButton"];
  if(props.secondary) {
    classes.push("DialButton-secondary");
  }
  if(props.terciary) {
    classes.push("DialButton-terciary");
  }
  return <button className={classes.join(" ")} onClick={handleClick}>{props.value}</button>;
};

export const CleanButton = props => {
  return <button className={"DialButton" + (props.secondary ? "-secondary" : "")} onClick={() => props.onClick()}>C</button>;
};

export const Display = props => {
  return <div className="App-display">{props.content}</div>
};

export const CleanOneButton = props => {
  return <button className={"DialButton" + (props.secondary ? "-secondary" : "")} onClick={() => props.onClick()}>CE</button>;
}

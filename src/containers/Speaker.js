import React from "react";

const Speaker = ({speaker}) => {
  return (
    <div className="speaker">
      <img alt="foto de " src={require(`../img/${speaker.avatar}`)} />
      <p>{speaker.name} | {speaker.role} | {speaker.company}</p>
    </div>
  );
}

export default Speaker;
import React from "react";

const TalkSummary = ({ onSelectTalk,talk }) => {
  return (
    <div  className="talkSummary">
      <span>{ talk.title }</span> | 
      <span>{ talk.datetime }</span> | 
      <span>{ talk.speaker.name }</span> | 
      <span>{ talk.summary }</span> | 
      <button onClick={() => onSelectTalk(talk)}> ver </button>
    </div>
  );
}

export default TalkSummary;
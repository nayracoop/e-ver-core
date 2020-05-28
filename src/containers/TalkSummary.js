import React from "react";
import Speaker from "./Speaker";

const TalkSummary = ({ onSelectTalk, talk }) => {
  return (
    <div  className="talkSummary">
      <span>{ talk.title }</span> | 
      <span>{ talk.datetime }</span> | 
      <span>{ talk.summary }</span> | 
      <button onClick={() => onSelectTalk(talk)}> ver </button>
      <div>
        {talk.speakers.map(s => <Speaker speaker={s} />)}
      </div>
    </div>
  );
}

export default TalkSummary;
import React from "react";

const TalkSummary = ({title, datetime, speakers, summary}) => {
  return (
    <>
    <span>{ title }</span> | <span>{ datetime }</span> | <span>{ speakers.name }</span> | <span>{ summary }</span>
    </>
  );
}

export default TalkSummary;
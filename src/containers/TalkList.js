import React from "react";
import TalkSummary from "./TalkSummary"

const TalkList = ({talks, onSelectTalk}) => {
  return(
    <section>
      <h2>Event Talks</h2>
      <ul>
        {talks.map((talk) => (
          <li key={talk.id} >
            <TalkSummary  key={talk.id} onSelectTalk={onSelectTalk} talk={talk} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TalkList;
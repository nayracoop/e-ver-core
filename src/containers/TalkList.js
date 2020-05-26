import React from "react";
import TalkSummary from "./TalkSummary"

const TalkList = ({talks}) => {
  return(
    <section>
      <h2>Event Talks</h2>
      <ul>
        {talks.map((talk) => (
          <li>
            <TalkSummary key={talk.id} title={talk.title} datetime={talk.begin} speakers={talk.speaker} summary={talk.summary} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TalkList;
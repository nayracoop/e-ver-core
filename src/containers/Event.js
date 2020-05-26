import React, { useState } from "react";
import Video from "./Video";
import CommentList from "./CommentList";
import EventDetails from "./EventDetails";
import EventList from "./EventList";
import SpeakerList from "./SpeakerList";

import { talks } from "../static-data";

const speakersList = (talks) => {
  return talks.map((talk) => talk.speaker);
};

const Event = ({ props }) => {
  const [selectedTalk, setSelectedTalk] = useState(talks[0]);
  const selectTalk = (talk) => setSelectedTalk(talk);

  console.log(selectedTalk);

  return (
    <>
      <Video video={selectedTalk.video} />
      <CommentList />
      {/* <EventDetails talk={selectedTalk} /> */}
      {/* <EventList talks={talks} onSelectTalk={selectTalk} /> */}
      {/* <SpeakerList speakersList={speakersList(talks)} /> */}
    </>
  );
};

export default Event;

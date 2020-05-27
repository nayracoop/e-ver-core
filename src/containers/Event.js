import React, { useState } from "react";
import Video from "./Video";
import CommentList from "./CommentList";
import TalkDetails from "./TalkDetails";
import TalkList from "./TalkList";
import SpeakerList from "./SpeakerList";

import { talks } from "../static-data";
import Speaker from "./Speaker";

// should be a unique speakers list
const speakersList = (talks) => {
  const speakers = talks.map((talk) => talk.speaker);
  return Array.from(new Set(speakers.map(s => s.id)))
    .map(id => {
      return speakers.find(s => s.id === id)
    });
};

const Event = ({ props }) => {
  const [selectedTalk, setSelectedTalk] = useState(talks[0]);
  const selectTalk = (talk) => setSelectedTalk(talk);

  console.log(selectedTalk);

  return (
    <>
      <Video video={selectedTalk.video} />
      <TalkDetails talk={selectedTalk} />
      <TalkList talks={talks} onSelectTalk={selectTalk} />
      <SpeakerList speakersList={speakersList(talks)} />
    </>
  );
};

export default Event;

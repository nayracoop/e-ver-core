import React, { useState } from "react";
import Video from "./Video";
import CommentList from "./CommentList";
import TalkDetails from "./TalkDetails";
import TalkList from "./TalkList";
import SpeakerList from "./SpeakerList";

import { talks } from "../static-data";

const speakersList = (talks) => {
  return talks.map((talk) => talk.speaker);
};

const Event = ({ props }) => {
  const [selectedTalk, setSelectedTalk] = useState(talks[0]);
  const selectTalk = (talk) => setSelectedTalk(talk);

  return (
    <>
      <Video video={selectedTalk.video} />
      <CommentList />
      <TalkDetails talk={selectedTalk} />
      <TalkList talks={talks} onSelectTalk={selectTalk} />
      <SpeakerList speakersList={speakersList(talks)} />
    </>
  );
};

export default Event;

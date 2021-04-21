import React, { useState } from 'react'
import Video from '../Video'
import CommentList from '../CommentList'
import TalkDetails from '../TalkDetails'
import TalkList from '../sections/Program'
import SpeakersList from '../sections/_Speakers'
import SponsorList from '../sections/Sponsors'
import CountdownTimer from '../snippets/CountdownTimer'
import Subscribe from '../Suscribe'
// import SpeakerList from './SpeakerList'
// import TalkList from "./TalkList";
// import SponsorList from "./SponsorList";

// should be a unique speakers list
const speakersList = (t) => {
  const speakers = t.map((talk) => talk.speakers).flat()
  return Array.from(new Set(speakers.map((s) => s.id))).map((id) => {
    return speakers.find((s) => s.id === id)
  })
}

const Event = ({event}) => {
  const [selectedTalk, setSelectedTalk] = useState(event.talks[0])
  const selectTalk = (talk) => setSelectedTalk(talk)

  return (
    <>
      <CountdownTimer startDate={event.start_time} />
      <Subscribe handleSubscription={() => {}} />
      <Video video={selectedTalk.video} />
      <CommentList talk={selectedTalk} />
      <TalkDetails talk={selectedTalk} />
      <TalkList talks={event.talks} onSelectTalk={selectTalk} />
      <SpeakersList speakersList={speakersList(event.talks)} />
      <SponsorList sponsors={event.sponsors} />
    </>
  )
}

export default Event

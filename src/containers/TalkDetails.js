import React from "react";
import moment from "moment";
import Speaker from "./Speaker";

const TalkDetails = ({event}) => {
  return (
    <section className="EventDetails">
      <h2>{event.title}</h2>
      <div className="timeDetails">
        <span>Fecha {moment(event.begin).format("dddd D/M/YYYY HH:mm")}</span> | 
        <span>Duración {event.duration} min.</span>
      </div>
      <p>{event.details}</p>
      <Speaker speaker={event.speaker}/>
    </section>
  );
}

export default TalkDetails;
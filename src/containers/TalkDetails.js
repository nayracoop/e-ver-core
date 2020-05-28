import React from "react";
import moment from "moment";
import Speaker from "./Speaker";

const TalkDetails = ({ talk }) => {
  return (
    <section className="EventDetails">
      <h2>{talk.title}</h2>
      <div className="timeDetails">
        <span>Fecha {moment(talk.begin).format("dddd D/M/YYYY HH:mm")}</span> |
        <span>Duración {talk.duration} min.</span>
      </div>
      <p>{talk.details}</p>
      <div>
        {talk.speakers.map(s => <Speaker speaker={s} />)}
      </div>
    </section>
  );
};

export default TalkDetails;

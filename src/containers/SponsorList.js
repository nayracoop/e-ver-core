import React from "react";
import Sponsor from "./Sponsor";

const SponsorList = ({sponsors}) => {
  return(
    <section>
      <h2>Auspiciantes</h2>
      <ul>
        {sponsors.map((sponsor) => (
          <li key={sponsor.id} >
            <Sponsor  key={sponsor.id} sponsor={sponsor} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SponsorList;
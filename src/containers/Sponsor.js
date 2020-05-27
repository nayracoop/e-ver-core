import React from "react";

const Sponsor = ({ sponsor }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={sponsor.href} >
      <img src={require(`../img/${sponsor.logo}`)} alt={`${sponsor.name} logo`} />
    </a>
  );
}

export default Sponsor;
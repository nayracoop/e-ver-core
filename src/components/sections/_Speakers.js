import React from "react";
import Speaker from "../snippets/Speaker";

const Speakers = ({ speakersList }) => {
  return (
    <section>
      <h2>Disertantes</h2>
      <ul>
        {speakersList.map((s) => (
          <li key={s.id} >
            <Speaker speaker={s} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Speakers;

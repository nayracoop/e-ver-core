import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Title from '../snippets/ui/Title'
import SponsorsList from '../snippets/SponsorsList'

const Sponsors = ({ sponsors }) => {
  return (
    <section>
      <Title level={2}>Auspiciantes</Title>
      <List sponsors={sponsors} />
    </section>
  )
}

Sponsors.propTypes = {
  sponsors: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

export default Sponsors

const List = styled(SponsorsList)`
  margin-top: 2.5em;
`

// import React from "react";
// import Sponsor from "../Sponsor";

// const SponsorList = ({sponsors}) => {
//   return(
//     <section>
//       <h2>Auspiciantes</h2>
//       <ul>
//         {sponsors.map((sponsor) => (
//           <li key={sponsor.id} >
//             <Sponsor  key={sponsor.id} sponsor={sponsor} />
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }

// export default SponsorList;

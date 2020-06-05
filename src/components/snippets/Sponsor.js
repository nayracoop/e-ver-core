import React from "react"
import styled, { withTheme } from "styled-components"

const Sponsor = (props) => {
  console.log(props.sponsor)
  return (
    <Link target="_blank" rel="noopener noreferrer" href={props.sponsor.website} title={props.sponsor.name} {...props}>
      <Image src={require(`../../assets/img/${props.sponsor.logo}`)} alt={props.sponsor.name} />
    </Link>
  );
}

export default withTheme(Sponsor)

const Link = styled.a`
  text-decoration: none;
  border: 1px solid transparent;
  display: inline-block;
  padding: 30px 15px;
  transition: all 200ms ease-in-out;
  filter: grayscale(100%);
  &:hover {
    border-color: ${props => props.theme.color.border};
    filter: none;
  }
`

const Image = styled.img`
  display: block;
  max-width: 100%;
`
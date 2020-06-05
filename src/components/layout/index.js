import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 ${props => props.theme.layout.gap}px;

  @media (min-width: ${props => props.theme.layout.breakpoints.s}px) {
    max-width: ${props => props.theme.layout.breakpoints.s}px;
    margin: 0 auto;
  }
  @media (min-width: ${props => props.theme.layout.breakpoints.m}px) {
    max-width: ${props => props.theme.layout.breakpoints.m}px;
  }
  @media (min-width: ${props => props.theme.layout.breakpoints.l}px) {
    max-width: ${props => props.theme.layout.breakpoints.l}px;
  }
  @media (min-width: ${props => props.theme.layout.breakpoints.xl}px) {
    max-width: ${props => props.theme.layout.breakpoints.xl}px;
  }
`
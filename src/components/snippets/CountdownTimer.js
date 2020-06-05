import React, { useEffect, useState } from "react";
import styled, { withTheme } from "styled-components"

const  CountdownTimer = ({startDate}) => {
  
  const [timeLeft, setTimeLeft] = useState( { days: 0, hours: 0, minutes: 0, seconds: 0 } )
  const stringDate = new Date(startDate).toISOString()
  const timerComponents = []

  Object.keys(timeLeft).forEach(interval => {
    timerComponents.push(
      <TimerPiece key={interval}>
        <TimerValue>{('00' + timeLeft[interval]).substr(-2)}</TimerValue>
        <TimerUnits>{interval}</TimerUnits>
      </TimerPiece>
    );
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // check time zone
      // maybe better to use moment
      const difference = +new Date(startDate) - +new Date()
      let calcTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }
  
      if (difference > 0) {
        calcTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }
  
      return calcTimeLeft;
    }

    const updateCountdown = () => {
      const calculatedTimeLeft = calculateTimeLeft()
      setTimeLeft(calculatedTimeLeft)
    }

    const timer = setTimeout(updateCountdown, 1000)
    return () => { 
      clearTimeout(timer)
    }
  }, [timeLeft, startDate])
  
  return (
    <Wrapper dateTime={stringDate}>
      {timerComponents}
    </Wrapper>
  );
}

export default withTheme(CountdownTimer);

const Wrapper = styled.time`
  display: flex;
  flex-flow: row wrap;
  line-height: 1.25;
  max-width:400px;
  margin: 0 auto;
`

const TimerPiece = styled.span`
  flex: 1;
  text-align: center;
  margin: 0 2px;
  `
  
  const TimerValue = styled.span`
  font-family: ${props => props.theme.font.display.family};
  font-weight: ${props => props.theme.font.display.weight};
  font-size: 2em;
  border: 1px solid ${props => props.theme.color.border};
  border-radius: 5px;
  padding: 0.25em 0;
  display: block;
`

const TimerUnits = styled.span`
  font-family: ${props => props.theme.font.text.family};
  font-weight: ${props => props.theme.font.text.weight};
  font-size: 1em;
  display: block;
`
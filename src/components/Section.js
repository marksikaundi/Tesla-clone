import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
      <ItemText>
          <h1>{ title }</h1>
          <p>{ description }</p>
      </ItemText> 
        </Fade>
      <Button>
        <Fade bottom>
      <ButtonGroup>
          <LeftButton>
              {leftBtnText}
          </LeftButton>
          { rightBtnText && 
              <RightButton>
              {rightBtnText}
          </RightButton>
          }
          
      </ButtonGroup>
      </Fade>

      <DownArrow src="/images/down-arrow.svg" />
      </Button>
    </Wrap>
  )
}

export default Section

// wrapper
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('/images/model-s.jpg');
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("/images/${props.bgImage}")`}
`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  z-index: -1;
`
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 760px) {
    flex-direction: column;
  }

`
// buttons
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  margin: 8px;
`
// buttons
const RightButton = styled(LeftButton)`
  background: white;
  opacity:v 0.65;
  color: black;
`
const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`
const Button = styled.div`

`















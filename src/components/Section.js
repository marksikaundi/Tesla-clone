import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <Wrap>
        
      <ItemText>
          <h1>Model S</h1>
          <p>Order oneline for Touchless Delivery</p>
      </ItemText>
      <Button>
      <ButtonGroup>
          <LeftButton>
              Custom Order
          </LeftButton>

          <RightButton>
              Existing Inventory
          </RightButton>
      </ButtonGroup>

      <DownArrow src="/images/down-arrow.svg" />
      </Button>
    </Wrap>
  )
}

export default Section

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
`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

`

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















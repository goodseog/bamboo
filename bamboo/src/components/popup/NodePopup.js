import React from 'react'
import styled from 'styled-components'

const StyledBackGround = styled.div`
  position: fix;
  width: 100%;
  height: 100%;
  background: #ffffff05;
`

const StyledFrontPopup = styled.div`
  position: fix;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  background: white;
`

class NodePopup extends React.Component {

  render = () => {
    return (
      <StyledBackGround>
        <StyledFrontPopup>
          hello!
        </StyledFrontPopup>
      </StyledBackGround>
    )

  }
}

export default NodePopup;
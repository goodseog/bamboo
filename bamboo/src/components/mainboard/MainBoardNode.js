import React from 'react'
import styled from 'styled-components'

import { useBamboo } from 'contexts/BambooContext'

const StyledMainBoardNode = styled.section`
  position: relative;
  top: 100px;
  left: 100px;
  width: 100px;
  height: 60px;
  background: black;
  color: white;
`

class MainBoardNode extends React.Component {

  render = () => {
    return (
      <StyledMainBoardNode>
        test
      </StyledMainBoardNode>
    )
  }
}

export default useBamboo(MainBoardNode);
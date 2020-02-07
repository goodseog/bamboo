import React from 'react'
import styled from 'styled-components'

import { useBamboo } from 'contexts/BambooContext'

const StyledMainBoardNode = styled.rect`
  position: relative;
  top: 60px;
  width: 100px;
  height: 60px;
  background: white;
  color: black;
`

class MainBoardNode extends React.Component {
  state = {}

  render = () => {
    return (
      <StyledMainBoardNode>
        {/* {console.log(this.props.nodes)} */}
      </StyledMainBoardNode>
    )
  }
}

export default useBamboo(MainBoardNode);
import React from 'react'
import styled from 'styled-components'

import { useBamboo } from 'contexts/BambooContext'

const StyledMainBoard = styled.svg`
  position: relative;
  top: 60px;
  width: 100%;
  height: 100%;
  background: white;
  color: black;
`

class MainBoard extends React.Component {
  state = {}

  render = () => {
    return (
      <StyledMainBoard ref='mainboard'>
        {/* {console.log(this.props.nodes)} */}
      </StyledMainBoard>
    )
  }
}

export default useBamboo(MainBoard);
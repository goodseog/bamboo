import React from 'react'
import styled from 'styled-components'

import MainBoardNode from 'components/mainboard/MainBoardNode'
import { useBamboo } from 'contexts/BambooContext'

const StyledMainBoard = styled.div`
  position: relative;
  top: 60px;
  width: 100%;
  height: 100%;
  background: white;
  color: black;
`

class MainBoard extends React.Component {
  render = () => {
    return (
      <StyledMainBoard>
        {this.props.nodes.map(node => <MainBoardNode />)}
      </StyledMainBoard>
    )
  }
}

export default useBamboo(MainBoard);
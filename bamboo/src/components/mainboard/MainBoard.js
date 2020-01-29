import React from 'react'
import styled from 'styled-components'

import { useBamboo } from 'contexts/BambooContext'


const StyledMainBoard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: white;
  color: black;
`

class MainBoard extends React.Component {

  render = () => {
    return (
      <StyledMainBoard>
        mainboard
      </StyledMainBoard>
    )
  }
}

export default useBamboo(MainBoard);
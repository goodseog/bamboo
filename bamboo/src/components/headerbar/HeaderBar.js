import React from 'react'
import styled from 'styled-components'

import { useBamboo } from 'contexts/BambooContext'


const StyledHeaderBar = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  background: #538D1A;
  color: #E2DBAC;
  box-shadow: 0px 0px 3px 3px gray;
  z-index: 1;
`

class HeaderBar extends React.Component {

  render = () => {
    return (
      <StyledHeaderBar>
        HeaderBar
      </StyledHeaderBar>
    )
  }
}

export default useBamboo(HeaderBar);
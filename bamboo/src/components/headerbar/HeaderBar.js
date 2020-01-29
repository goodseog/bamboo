import React from 'react'
import styled from 'styled-components'

import { useBamboo } from 'contexts/BambooContext'


const StyledHeaderBar = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  background-color: 'yellow';
  color: 'yellow';
  border-bottom: solid 1px;
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
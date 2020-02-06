import React from 'react'
import styled from 'styled-components'

import Logo from 'components/header/Logo'
import MenuBar from 'components/header/MenuBar'
import { useBamboo } from 'contexts/BambooContext'


const StyledHeader = styled.div`
  display: inline-block;
  position: fixed;
  width: 100%;
  height: 60px;
  background: #538D1A;
  color: #E2DBAC;
  z-index: 1;
`

class Header extends React.Component {

  render = () => {
    return (
      <StyledHeader>
        <Logo />
        <MenuBar />
      </StyledHeader>
    )
  }
}

export default useBamboo(Header);
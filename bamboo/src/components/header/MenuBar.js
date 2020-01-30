import React from 'react'
import styled from 'styled-components'

import MenuBarItem from 'components/header/MenuBarItem'

const StyledMenuBar = styled.div`
  display: inline-block;
  position: absolute;
  left: 170px;
  width: 70%;
`

class MenuBar extends React.Component {
  render = () => (
    <StyledMenuBar>
      <MenuBarItem name='File'/>
      <MenuBarItem name='Data Source'/>
      <MenuBarItem name='Engineer'/>
    </StyledMenuBar>
  )
}

export default MenuBar;
import React from 'react'
import styled from 'styled-components'

import MenuBarItem from 'components/header/MenuBarItem'
import Values from 'global/Values'

const StyledMenuBar = styled.div`
  display: inline-block;
  position: absolute;
  left: 170px;
  width: 70%;
`

class MenuBar extends React.Component {
  render = () => (
    <StyledMenuBar>
      {Object.keys(Values.dropitems).map(name => <MenuBarItem name={name} />)}
    </StyledMenuBar>
  )
}

export default MenuBar;
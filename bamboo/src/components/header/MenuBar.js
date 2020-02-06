import React from 'react'
import styled from 'styled-components'

import MenuBarItem from 'components/header/MenuBarItem'
import Values from 'global/Values'

const StyledMenuBar = styled.div`
  display: table-cell;
  left: 170px;
  width: 1000px;
  height: 60px;
  // width: 70%;
  // height: 100%;
  font-size: 23px;
`

class MenuBar extends React.Component {
  render = () => (
    <StyledMenuBar>
      {Object.keys(Values.dropitems).map(name => <MenuBarItem key={'key_'+name} name={name} />)}
    </StyledMenuBar>
  )
}

export default MenuBar;
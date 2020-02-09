import React from 'react'
import styled from 'styled-components'

import MenuBox from 'components/header/MenuBox'

const StyledMenuBarItem = styled.div`
  display: table-cell;
  position: relative;
  width: 140px;
  height: 60px;
  text-align: center;
  vertical-align: middle;
  &:hover {
    background: #6E9A42;
  }
`

class MenuBarItem extends React.Component {
  state = {
    'display': 'none',
  }

  handleMouseOver = (e) => {
    this.setState({ 'display': 'table' });
  }

  handleMouseOut = (e) => {
    this.setState({ 'display': 'none' });
  }

  render = () => {
    return (
      <StyledMenuBarItem
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}>
        {this.props.name}
        <MenuBox display={this.state.display} name={this.props.name} />
      </StyledMenuBarItem>
    )
  }
}

export default MenuBarItem;
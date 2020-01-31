import React from 'react'
import styled from 'styled-components'

import MenuBox from 'components/header/MenuBox'

const StyledMenuBarItem = styled.div`
  display: inline-block;
  position: relative;
  width: 140px;
  text-align: center;
  &:hover {
    background: #6E9A42;
  }
`

class MenuBarItem extends React.Component {
  state = {
    'display': 'none',
  }

  handleMouseOver = (e) => {
    this.setState({ 'display': 'block' });
  }

  handleMouseOut = (e) => {
    this.setState({ 'display': 'none' });
  }

  render = () => {
    return (
      <StyledMenuBarItem
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}>
        <p>{this.props.name}</p>
        <MenuBox display={this.state.display} name={this.props.name} />
      </StyledMenuBarItem>
    )
  }
}

export default MenuBarItem;
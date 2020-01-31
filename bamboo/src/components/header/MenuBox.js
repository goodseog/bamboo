import React from 'react'
import styled from 'styled-components'

import Values from 'global/Values'
import MenuBoxItem from 'components/header/MenuBoxItem'


const StyledMenuBox = styled.div`
  display: ${props => props.display};
  position: absolute;
  top: 60px;
  background: #6E9A42;
`

class MenuBox extends React.Component {
  render = () => {
    return (
      <StyledMenuBox display={this.props.display}>
        {Values.dropitems[this.props.name].map(item => <MenuBoxItem name={this.props.name} item={item} />)}
      </StyledMenuBox>
    )
  }
}

export default MenuBox;
import React from 'react'
import styled from 'styled-components'

const StyledMenuBoxItem = styled.label`
  display: block;
  width: 200px;
  height: 22px;
  background: #6E9A42;
  text-align: left;
  padding: 15px 20px;

  &:hover {
    color: white;
  }
`

class MenuBoxItem extends React.Component {
  render = () => {
    return (
      <StyledMenuBoxItem>
        {this.props.item}
      </StyledMenuBoxItem>
    )
  }
}


export default MenuBoxItem;
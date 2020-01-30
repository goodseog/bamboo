import React from 'react'
import styled from 'styled-components'

import MenuBoxItem from 'components/header/MenuBoxItem'

let dropitems = {
  'File': ['New Project', 'Open File...', 'Save', 'Save As...', 'Close Project', 'Exit'],
  'Data Source': ['Data Reader', 'Data Writer'],
  'Engineer': ['Feature Engineer', 'Table Engineer']
}

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
        {dropitems[this.props.name].map(item => <MenuBoxItem name={this.props.name} item={item} />)}
      </StyledMenuBox>
    )
  }
}

export default MenuBox;
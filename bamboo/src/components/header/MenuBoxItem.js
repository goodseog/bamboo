import React from 'react'
import styled from 'styled-components'

import { useBamboo } from 'contexts/BambooContext'

const StyledMenuBoxRow = styled.div`
  text-align: left;
  display: table-row;
`

const StyledMenuBoxCell = styled.div`
  display: table-cell;
  height: 50px;
  
  vertical-align: middle;
  &:hover {
    color: white;
  }
`



class MenuBoxItem extends React.Component {

  handleDoubleClick = () => {
    if( this.props.name === 'Data Source'){
      this.props.createNode(this.props.item)
    }
  }

  render = () => {
    return (
      <StyledMenuBoxRow onDoubleClick={this.handleDoubleClick}>
        <StyledMenuBoxCell>
          {this.props.item}
        </StyledMenuBoxCell>
      </StyledMenuBoxRow>
    )
  }
}


export default useBamboo(MenuBoxItem);
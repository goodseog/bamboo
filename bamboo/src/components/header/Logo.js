import React from 'react'
import styled from 'styled-components'


const StyledLogo = styled.div`
  display: table-cell;
  width: 160px;
  height: 60px;
  font-size: 28px;
  text-align: center;
  vertical-align: middle;
`

class Logo extends React.Component{
  render = () => (
    <StyledLogo>
      Bamboo
    </StyledLogo>
  )
}

export default Logo;
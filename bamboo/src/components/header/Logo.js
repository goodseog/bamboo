import React from 'react'
import styled from 'styled-components'


const StyledLogo = styled.div`
  display: inline-block;
  position: absolute;
  width: 160px;
  height: 60px;
  margin-top: 15px;
  text-align: center;
  font-size: 28px;
`

class Logo extends React.Component{
  render = () => (
    <StyledLogo>
      Bamboo
    </StyledLogo>
  )
}

export default Logo;
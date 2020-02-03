import React from 'react'
import styled from 'styled-components'

import MainBoardNode from 'components/mainboard/MainBoardNode'
import { useBamboo } from 'contexts/BambooContext'

const StyledMainBoard = styled.div`
  position: relative;
  top: 60px;
  width: 100%;
  height: 100%;
  background: white;
  color: black;
`

class MainBoard extends React.Component {
  render = () => {
    return (
      <StyledMainBoard>
        {/* {this.props.nodes.map(node => <MainBoardNode />)} */}
        <iframe id='a0a2a8da' name='a0a2a8da' src='http://10.113.66.107/adserver/www/delivery/afr.php?zoneid=1&amp;target=_blank&amp;cb=INSERT_RANDOM_NUMBER_HERE' frameborder='0' scrolling='no' width='180' height='200' allow='autoplay'><a href='http://10.113.66.107/adserver/www/delivery/ck.php?n=a35f4287&amp;cb=INSERT_RANDOM_NUMBER_HERE' target='_blank'><img src='http://10.113.66.107/adserver/www/delivery/avw.php?zoneid=1&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;n=a35f4287' border='0' alt='' /></a></iframe>

      </StyledMainBoard>
    )
  }
}

export default useBamboo(MainBoard);

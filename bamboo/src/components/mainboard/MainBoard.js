import React from 'react'
import styled from 'styled-components'
import * as d3 from 'd3'

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
  state = {}

  render = () => {
    var svg = d3.select(this.refs.mainboard)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')

    svg.selectAll("rect")
      .data([1,2,3,4]).enter()
        .append('rect')
        .attr('width', 100)
        .attr('height', 60)
        .attr('x', datapoint => datapoint * 100)
        .attr('y', datapoint => datapoint * 100)
        .attr('fill', 'green')

    return (
      <StyledMainBoard ref='mainboard'>
        {/* {console.log(this.props.nodes)} */}
      </StyledMainBoard>
    )
  }
}

export default useBamboo(MainBoard);
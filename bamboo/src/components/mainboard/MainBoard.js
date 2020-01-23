import React from 'react'

import MainBoardCard from './MainBoardCard'
import { BambooConsumer } from '../../contexts/BambooContext'
import './MainBoard.css'

import d3 from 'd3'


class MainBoard extends React.Component {
  renderNode = (node) => {
    return (
      <MainBoardCard {...node} id={node.key}/>
    )
  }

  render = () => {
    return (
      <BambooConsumer>
        {(bamboo) => (
          <div className="mainboard">
            {bamboo.state.graph.map((node) => this.renderNode(node))}
          </div>
        )}
      </BambooConsumer>
    )
  }
}

export default MainBoard;
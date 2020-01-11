import React from 'react'

import MainBoardCard from './MainBoardCard'
import { BambooConsumer } from '../../contexts/BambooContext'
import './MainBoard.css'


class MainBoard extends React.Component {
  renderNode = (node) => {
    return <MainBoardCard text={node.constructor.name} />
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
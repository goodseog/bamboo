import React from 'react'

import { BambooConsumer } from '../../contexts/BambooContext'

class SideBarSender extends React.Component {
  state = {}

  handleDoubleClick = (e) => {
    console.log('double click!!')
    this.props.addNode(this.props.nodeName)
  }

  render = () => {
    return (
      <button
        type='button'
        className='sidebaritem'
        onDoubleClick={this.handleDoubleClick}>
        {this.props.nodeName}
      </button>
    )
  }
}

class SideBarItem extends React.Component {
  render = () => {
    return (
      <BambooConsumer>
        {
          ({ state, actions }) => (
            <SideBarSender
              addNode={actions.addNode}
              nodeName={this.props.nodeName}
            />
          )
        }
      </BambooConsumer>
    )
  }
}


export default SideBarItem;
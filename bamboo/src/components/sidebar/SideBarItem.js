import React from 'react'

import { BambooConsumer } from '../../contexts/BambooContext'

class SideBarSender extends React.Component {
  state = {}

  handleDoubleClick = (e) => {
    console.log('double click!!')
    this.props.addNode(this.props.name)
  }

  render = () => {
    return (
      <button
        type='button'
        class='sidebaritem'
        onDoubleClick={this.handleDoubleClick}>
        {this.props.name}
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
              name={this.props.name}
            />
          )
        }
      </BambooConsumer>
    )
  }
}


export default SideBarItem;
// Let's make <Card text='Write the docs' /> draggable!
import React from 'react'
import { BambooConsumer } from '../../contexts/BambooContext';

class MainBoardCardImpl extends React.Component {
  state = {...this.props}

  handleDragStart = (ev) => {
    this.startX = ev.clientX
    this.startY = ev.clientY
  }

  handleDragEnd = (ev) => {
    let dx = ev.clientX - this.startX
    let dy = ev.clientY - this.startY
    let left = this.state.left + dx
    let top = this.state.top + dy
    this.setState({ left: left, top: top })
    this.props.setPos(this.state.id, left, top)
  }

  handleDoubleClick = (ev) => {
    this.props.showPopup(this.state.id)
  }

  render = () => {
    let style_pos = {
      left: this.state.left,
      top: this.state.top,
    }

    return (
      <div
        className="mainboardcard"
        draggable="true"
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
        onDoubleClick={this.handleDoubleClick}
        style={style_pos}>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

class MainBoardCard extends React.Component {
  render = () => { 
    return (
      <BambooConsumer>
        {(bamboo) => (
          <MainBoardCardImpl
            {...bamboo.actions}
            {...this.props}
          />
        )}
      </BambooConsumer>
    )
  }
}

export default MainBoardCard
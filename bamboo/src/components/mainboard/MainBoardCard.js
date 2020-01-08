// Let's make <Card text='Write the docs' /> draggable!
import React from 'react'

class MainBoardCard extends React.Component {
  state = {
    position: 'absolute',
    width: '150px',
    height: '60px',
    left: 60,
    top: 60,
    background: '#FA4F38',
    textAlign: 'center',
  }

  handleDragStart = (ev) => {
    console.log('drag start!')
    this.startX = ev.clientX
    this.startY = ev.clientY
  }

  handleDragEnd = (ev) => {
    console.log('drag end!')
    let dx = ev.clientX - this.startX
    let dy = ev.clientY - this.startY
    this.setState({ left: this.state.left + dx, top: this.state.top + dy})
    console.log(dx, dy)
  }

  render = () => {
    let style = {...this.state}
    return (
      <div
        draggable="true"
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
        style={style}>
        {this.props.text}
      </div>
    )
  }
}

export default MainBoardCard
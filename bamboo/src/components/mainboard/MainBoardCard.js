// Let's make <Card text='Write the docs' /> draggable!
import React from 'react'

let genX = 60;
let genY = 60;

class MainBoardCard extends React.Component {
  state = {
    left: genX,
    top: genY,
  }

  componentWillMount = () => { 
    genX += 20;
    genY += 20;
  }

  handleDragStart = (ev) => {
    this.startX = ev.clientX
    this.startY = ev.clientY
  }

  handleDragEnd = (ev) => {
    let dx = ev.clientX - this.startX
    let dy = ev.clientY - this.startY
    this.setState({ left: this.state.left + dx, top: this.state.top + dy})
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
        style={style_pos}>
        {this.props.text}
      </div>
    )
  }
}

export default MainBoardCard
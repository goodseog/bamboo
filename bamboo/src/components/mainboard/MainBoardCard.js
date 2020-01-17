// Let's make <Card text='Write the docs' /> draggable!
import React from 'react'
import { BambooConsumer } from '../../contexts/BambooContext';

let genX = 60;
let genY = 60;

class MainBoardCardImpl extends React.Component {
  state = {
    left: genX,
    top: genY,
    enter: false,
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
    this.setState({ left: this.state.left + dx, top: this.state.top + dy })
  }

  handleMouseEnter = (ev) => { 
    this.setState({enter: true})
  }

  handleMouseLeave = (ev) => { 
    this.setState({enter: false})    
  }

  handleDoubleClick = (ev) => {
    this.props.showPopup()
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
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMOuseLeave}
        onDoubleClick={this.handleDoubleClick}
        style={style_pos}>
        <p>{this.props.text}</p>
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
            showPopup={bamboo.actions.showPopup}
            text={this.props.text}
          />
        )}
      </BambooConsumer>
    )
  }
}

export default MainBoardCard
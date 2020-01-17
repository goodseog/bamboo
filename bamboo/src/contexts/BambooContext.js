import React from 'react';

import DataReader from './nodes/DataReader'
import DataWriter from './nodes/DataWriter'

const Context = React.createContext();
const { Provider, Consumer: BambooConsumer } = Context;

let glob_count = 0

let popup_style = (display) => {
  return {
    display: display,
    position: 'fixed',
    zIndex: '1',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgb(0, 0, 0)',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    textAlign: 'center',
  }
}

class BambooProvider extends React.Component {
  state = {
    filename: '',
    graph: [],
    popup: popup_style('none'),
  }

  actions = {
    addNode: (name) => {
      const graph = this.state.graph;
      switch (name) {
        case 'Data Reader':
          graph.push(new DataReader(glob_count++));
          break;
        case 'Data Writer':
          graph.push(new DataWriter(glob_count++));
          break;
        default:
          console.error('Nodetype does not exist')
      }
      this.setState({ graph: graph });
      console.log(this.state.graph);
    },
    showPopup: () => {
      console.log("Show popup!!")
      this.setState({ popup: popup_style('block') })
    },
    hidePopup: () => { 
      console.log("hide popup!!")
      this.setState({ popup: popup_style('none') })
    }

  }

  render = () => {
    const { state, actions } = this;
    const value = { state, actions };
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}


export {
  BambooProvider,
  BambooConsumer,
}
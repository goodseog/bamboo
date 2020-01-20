import React from 'react';

import DataReader from './nodes/DataReader'
import DataWriter from './nodes/DataWriter'
import { popup_bg_style } from '../components/popup/SettingPopup'

const Context = React.createContext();
const { Provider, Consumer: BambooConsumer } = Context;

let glob_count = 0

class BambooProvider extends React.Component {
  state = {
    filename: '',
    graph: [],
    popup: popup_bg_style('none'),
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
      this.setState({ popup: popup_bg_style('block') })
    },
    hidePopup: () => { 
      console.log("hide popup!!")
      this.setState({ popup: popup_bg_style('none') })
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
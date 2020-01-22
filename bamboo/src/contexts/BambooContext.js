import React from 'react';

import DataReader from '../nodes/DataReader'
import DataWriter from '../nodes/DataWriter'
import { popup_bg_style } from '../components/popup/SettingPopup'
import Values from '../global/Values'

const Context = React.createContext();
const { Provider, Consumer: BambooConsumer } = Context;


class BambooProvider extends React.Component {
  state = {
    filename: '',
    graph: [],
    popup_style: popup_bg_style('none'),
    popup_content: {},
  }

  actions = {
    addNode: (name) => {
      const graph = this.state.graph;
      switch (name) {
        case 'Data Reader':
          graph.push(DataReader(Values.glob_count++));
          break;
        case 'Data Writer':
          graph.push(DataWriter(Values.glob_count++));
          break;
        default:
          console.error('Nodetype does not exist')
      }
      this.setState({ graph: graph });
      console.log(this.state.graph);
    },
    showPopup: (key) => {
      console.log("Show popup!! - ", key)
      this.setState({ 
        popup_style: popup_bg_style('block'),
        popup_content: this.state.graph.find(node => node.key === key)
      })
    },
    hidePopup: (key) => {
      console.log("hide popup!!")
      this.setState({ popup_style: popup_bg_style('none') })
    },
    setPos: (key, top, left) => {
      const graph = this.state.graph;
      let index = graph.findIndex(node => node.key === key)
      graph[index].top = top
      graph[index].left = left
      this.setState({graph: graph})
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
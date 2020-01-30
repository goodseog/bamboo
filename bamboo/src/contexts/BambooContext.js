import React, { createContext } from 'react'

import JsonInput from 'nodes/JsonInput'
import DataReader from 'nodes/DataReader'

const Context = createContext();
const { Provider, Consumer: BambooConsumer } = Context;

class BambooProvider extends React.Component {
  state = {
    filepath: '',
    ncnt: 0,
    nodes: [],
  }

  actions = {
    createNode: () => {
      let nodes = this.state.nodes
      let ncnt = this.state.ncnt
      let newNode = DataReader(ncnt++)
      nodes.push(newNode)
      this.setState({ nodes: nodes, ncnt: ncnt })
    },

    showPopup: () => {
      let popup = JsonInput.renderPopup(DataReader(10).nodes)
      console.log(popup)
    }

  }

  render() {
    const { state, actions } = this;
    const value = { state, actions };

    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}

function useBamboo(WrapperComponent) {
  return () => {
    return (
      <BambooConsumer>
        {({ state, actions }) => (
          <WrapperComponent {...state} {...actions} />
        )}
      </BambooConsumer>
    )
  }
}

export {
  BambooProvider,
  BambooConsumer,
  useBamboo
}
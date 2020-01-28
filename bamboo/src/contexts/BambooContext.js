import React, { createContext } from 'react'

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

    },

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
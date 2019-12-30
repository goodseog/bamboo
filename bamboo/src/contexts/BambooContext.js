import React from 'react';

const Context = React.createContext();
const { Provider, consumer: SampleConsumer } = Context;

class BambooContext extends React.Component {
    state = {
        name: null,
        nodes: null,
        edges: null,
    }

    actions = {
        setName: (_name) => {
            this.setState({name: _name})
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
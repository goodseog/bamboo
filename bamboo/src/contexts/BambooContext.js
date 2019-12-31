import React from 'react';

import DataReader from './nodes/DataReader'
import DataWriter from './nodes/DataWriter'

const Context = React.createContext();
const { Provider, consumer: SampleConsumer } = Context;


class BambooContext extends React.Component {
    state = {
        name: null,
        graph: [],
    }

    actions = {
        setName: (name) => {
            this.setState({ name: name })
        },
        addNode: (type) => {
            const graph = this.state.graph;
            switch (type) {
                case 'datareader':
                    this.setState({ graph: graph.push(new DataReader()) });
                    break;
                case 'datawriter':
                    this.setState({ graph: graph.push(new DataWriter()) });
                    break;
                default:
                    console.error('Nodetype does not exist')
            }
        },
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
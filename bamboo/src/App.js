import React from 'react';
import axios from 'axios';

import { BambooProvider } from './contexts/BambooContext'


class App extends React.Component {
  state = {}

  componentDidMount = () => {
    axios.get('/api')
      .then(res => {
        this.setState({ data: res.data })
      })
  }

  render = () => {
    return (
      <div className="App">
        <BambooProvider>
          test
        </BambooProvider>
      </div>
    )
  }
}

export default App;

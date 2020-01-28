import React from 'react';
import axios from 'axios';


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
        test
      </div>
    )
  }
}

export default App;

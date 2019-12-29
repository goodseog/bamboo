import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    data: {
      title: null,
      body: null,
    },
  }

  componentDidMount = () => {
    axios.get('/api')
      .then(res => {
        this.setState({ data: res.data })
      })
  }

  render = () => {
    const { title, body } = this.state.data;
    return (
      <div className="App">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}

export default App;

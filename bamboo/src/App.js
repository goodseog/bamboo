import React from 'react';
import axios from 'axios';
import './App.css';

import SideBar from './components/sidebar/SideBar'
import MainBoard from './components/mainboard/MainBoard'


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
    return (
      <div className="App">
        <SideBar />
        <MainBoard />
      </div>
    )
  }
}

export default App;

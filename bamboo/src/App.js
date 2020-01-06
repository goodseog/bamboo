import React from 'react';
import axios from 'axios';
import './App.css';

import SideBar from './components/sidebar/SideBar'
import MainBoard from './components/mainboard/MainBoard'
import { BambooProvider } from './contexts/BambooContext'


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
        <BambooProvider>
          <SideBar />
          <MainBoard />
        </BambooProvider>
      </div>
    )
  }
}

export default App;

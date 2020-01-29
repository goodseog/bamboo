import React from 'react';
import axios from 'axios';

import HeaderBar from 'components/headerbar/HeaderBar'
import MainBoard from 'components/mainboard/MainBoard'
import { BambooProvider } from 'contexts/BambooContext'


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
      <BambooProvider>
        <HeaderBar />
        <MainBoard />
      </BambooProvider>
    )
  }
}

export default App;

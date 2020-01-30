import React from 'react';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components'

import Header from 'components/header/Header'
import MainBoard from 'components/mainboard/MainBoard'
import { BambooProvider } from 'contexts/BambooContext'

const GlobalStyle = createGlobalStyle`
  div {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`

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
        <GlobalStyle />
        <Header />
        <MainBoard />
      </BambooProvider>
    )
  }
}

export default App;

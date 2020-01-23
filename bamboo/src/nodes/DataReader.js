import React from 'react'
import Values from '../global/Values'
import Utils from '../global/Utils'

let DataReader = (key) => ({
  key: Utils.guidGenerator(),
  name: 'DataReader',  
  top: (Values.initPos + Values.initDiff * key),
  left: (Values.initPos + Values.initDiff * key),
  
  status: [
    <li></li>
  ],

  render: () => {
    return this.type
  }
})

export default DataReader;
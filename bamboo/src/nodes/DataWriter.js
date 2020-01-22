import Values from '../global/Values'
import Utils from '../global/Utils'

let DataWriter = (key) => ({
  key: Utils.guidGenerator(),
  name: 'DataWriter',  
  top: (Values.initPos + Values.initDiff * key),
  left: (Values.initPos + Values.initDiff * key),
})

export default DataWriter;
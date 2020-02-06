import React from 'react'

let JsonInput = {
  'input': (name, type, value) => ({
    'type': type,
    'name': name,
    'value': value,
    'children': [],
  }),

  renderPopup(inputs, display=true) {
    let ret = []
    inputs.forEach(input => {
      let style = display === 'true' ? '' : 'display: none;'
      if (input.type === 'radio') {
        ret.push(<input type={input.type} name={input.name} value={input.value} checked={input.checked}/>)
        ret = ret.concat(this.renderPopup(input.children, input.checked))
      } else {
        ret.push(<input type={input.type} name={input.name} value={input.value} style={style}/>)
      }
    })
    return ret
  },
}

export default JsonInput;
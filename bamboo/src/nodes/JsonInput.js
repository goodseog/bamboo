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

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

export default JsonInput;
export {
  guid
}
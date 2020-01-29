import React from 'react'

let JsonInput = {
  'input': (name, type, value) => ({
    'type': type,
    'name': name,
    'value': value,
    'children': [],
  }),

  renderPopup(inputs) {
    return inputs.map(input => {
      if (input.type  in ['text', 'file', 'password']){
        return <input type={input.type} name={input.name} value={input.value}/>
      } else if (input.type in ['radio']){
        
      }
    })
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
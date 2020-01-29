let NodeSetting = {
  'input': (name, type, value) => ({
    'type': type,
    'name': name,
    'value': value,
    'children': [],
  }),

  'renderNode': () => {

  },

  'saveNode': () => {

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

export default NodeSetting;
export {
  guid
}
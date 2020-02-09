export default {
  dropitems: {
    'File': ['New Project', 'Open File...', 'Save', 'Save As...', 'Close Project', 'Exit'],
    'Data Source': ['Data Reader', 'Data Writer'],
    'Engineer': ['Feature Engineer', 'Table Engineer']
  },

  guid: () => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
  
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
}
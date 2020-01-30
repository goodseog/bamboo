import JsonInput, { guid } from 'nodes/JsonInput'

let DataReader = (ncnt) => ({
  'nid': guid(),
  'left': 60 + 20 * ncnt,
  'top': 60 + 20 * ncnt,
  'nodes': initProps(),
  'next': []
})

let initProps = () => {
  let props = []

  let name = JsonInput.input('Node name', 'text', 'Data Reader', null)
  props.push(name)

  let local = JsonInput.input('Data Type', 'radio', 'local')
  local.children.push(JsonInput.input('File Path', 'file', ''))
  local.children.push(JsonInput.input('Seperator', 'text', ','))
  local.checked = 'true'
  props.push(local)

  let mysql = JsonInput.input('Data Type', 'radio', 'MySQL')
  mysql.children.push(JsonInput.input('MySQL host', 'text', ''))
  mysql.children.push(JsonInput.input('MySQL port', 'text', '3306'))
  mysql.children.push(JsonInput.input('MySQL user', 'text', ''))
  mysql.children.push(JsonInput.input('MySQL pass', 'password', ''))
  mysql.checked = 'false'
  props.push(mysql)

  return props
}

export default DataReader
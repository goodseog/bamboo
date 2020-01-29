import NodeSetting, { guid } from 'nodes/NodeSetting'

let DataReader = (ncnt) => ({
  'nid': guid(),
  'left': 60 + 20 * ncnt,
  'top': 60 + 20 * ncnt,
  'properties': initProps(),
  'next': []
})

let initProps = () => {
  let props = []

  let name = NodeSetting.input('Node name', 'text', 'Data Reader', null)
  props.push(name)

  let local = NodeSetting.input('Data Type', 'radio', 'local')
  local.children.push(NodeSetting.input('File Path', 'file', ''))
  local.children.push(NodeSetting.input('Seperator', 'text', ','))
  local.checked = 'true'
  props.push(local)

  let mysql = NodeSetting.input('Data Type', 'radio', 'MySQL')
  mysql.children.push(NodeSetting.input('MySQL host', 'text', ''))
  mysql.children.push(NodeSetting.input('MySQL port', 'text', '3306'))
  mysql.children.push(NodeSetting.input('MySQL user', 'text', ''))
  mysql.children.push(NodeSetting.input('MySQL pass', 'password', ''))
  mysql.checked = 'false'
  props.push(mysql)

  return props
}

export default DataReader
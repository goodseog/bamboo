let input = (name, type, value) => ({
  'type': type,
  'name': name,
  'value': value,
  'children': [],
})

let initProps = () => {
  let props = []

  let name = input('Node name', 'text', 'Data Reader', null)
  props.push(name)

  let local = input('Data Type', 'radio', 'local')
  local.children.push(input('File Path', 'file', ''))
  local.children.push(input('Seperator', 'text', ','))
  local.checked = 'true'
  props.push(local)

  let mysql = input('Data Type', 'radio', 'MySQL')
  mysql.children.push(input('MySQL host', 'text', ''))
  mysql.children.push(input('MySQL port', 'text', '3306'))
  mysql.children.push(input('MySQL user', 'text', ''))
  mysql.children.push(input('MySQL pass', 'password', ''))
  mysql.checked = 'false'
  props.push(mysql)

  return props
}

export let DataReader = (ncnt) => ({
  'nid': '',
  'left': 60 + 20 * ncnt,
  'top': 60 + 20 * ncnt,
  'properties': initProps(),
  'next': []
})
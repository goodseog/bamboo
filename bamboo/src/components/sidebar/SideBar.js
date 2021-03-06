import React from 'react'

import SideBarItem from './SideBarItem'

import './SideBar.css'

class SideBar extends React.Component {
  render = () => {
    return (
      <div className="sidebar">
        <SideBarItem nodeName='Data Reader' />
        <SideBarItem nodeName='Data Writer' />
      </div>
    )
  }
}

export default SideBar;
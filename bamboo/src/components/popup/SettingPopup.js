import React from 'react'

import { BambooConsumer } from '../../contexts/BambooContext'
import './SettingPopup.css'

class SettingPopupImpl extends React.Component {
  state = {};

  handleClickBackground = (ev) => {
    this.props.hidePopup()
  }

  handleClickFront = (ev) => {
  }

  render = () => {
    return (
      <BambooConsumer>
        {(bamboo) => (
          <div
            className="popup-back"
            onClick={this.handleClickBackground}
            style={bamboo.state.popup}>
            <div
              className="popup-front"
              onClick={this.handleClickFront}>

            </div>
          </div>
        )}
      </BambooConsumer>
    )
  }
}

class SettingPopup extends React.Component {
  render = () => {
    return (
      <BambooConsumer>
        {(bamboo) => (
          <SettingPopupImpl
            hidePopup={bamboo.actions.hidePopup}
          />
        )}
      </BambooConsumer>
    )
  }
}

export default SettingPopup;
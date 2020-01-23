import React from 'react'

import { BambooConsumer } from '../../contexts/BambooContext'
import './SettingPopup.css'

let popup_bg_style = (display) => {
  return {
    display: display,
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    animation: 'fadein 0.3s'
  }
}

class SettingPopupImpl extends React.Component {
  state = {};

  decodeStatus = (status) => {
    return (
      <p>
        {JSON.stringify(status)}
      </p>
    );
  }

  encodeStatus = () => {
    const status = document.getElementById('popup-body')
    console.log(status)
    return status
  }

  handleSubmit = () => {
    const status = this.encodeStatus();
    this.props.savePopup()
  }

  handleClose = () => {
    this.props.hidePopup()
  }

  render = () => {
    return (
      <BambooConsumer>
        {(bamboo) => (
          <div
            className="popup-back"
            style={bamboo.state.popup_style}>
            <section className="popup-front">
              <div id="popup-header">
                <button type="button" onClick={this.handleSubmit}> Submit </button>
                <button type="button" onClick={this.handleClose}>Close</button> 
              </div>
              <div id="popup-body">
                {this.decodeStatus(this.props.popup_content.status)}
              </div>              
            </section>
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
            {...bamboo.state}
            {...bamboo.actions}
          />
        )}
      </BambooConsumer>
    )
  }
}

export {
  popup_bg_style,
  SettingPopup
};
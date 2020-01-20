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
    backgroundColor: 'rgb(0, 0, 0)',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  }
}

class SettingPopupImpl extends React.Component {
  state = {};

  render = () => {
    return (
      <BambooConsumer>
        {(bamboo) => (
          <div
            className="popup-back"
            onClick={this.handleClickBackground}
            style={bamboo.state.popup}>
            <section className="popup-front">
              <button type="button" onClick={this.props.hidePopup}>Close</button>
              <p>popup</p>
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
            hidePopup={bamboo.actions.hidePopup}
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
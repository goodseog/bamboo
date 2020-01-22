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

  render = () => {
    return (
      <BambooConsumer>
        {(bamboo) => (
          <div
            className="popup-back"
            style={bamboo.state.popup_style}>
            <section className="popup-front">
              <button type="button" onClick={this.props.hidePopup}>Close</button>
              <p>
                {JSON.stringify(this.props.popup_content)}
              </p>
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
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class MediaChannelList extends Component {

  static propTypes = {}

  render () {
    return (
      <ul className="media-channel-list">
        {this.props.mediachannels ? this.props.mediachannels.map(mediachannel =>
          <li key={mediachannel.id} className="clearfix">
            <a href="#" className="pull-left">{mediachannel.meta.name}</a>
            <span className="pull-right line-items-count">({mediachannel.line_items.length})</span>
          </li>
        ) : null}
      </ul>
    )
  }
}

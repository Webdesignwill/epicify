import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class MediaChannelList extends Component {

  static propTypes = {}

  constructor (props) {
    super(props)
    this.findStatusClass = this.findStatusClass.bind(this)
  }

  findStatusClass (mediachannel) {
    return mediachannel.data.to_date.pacing.status + ' ' + mediachannel.data.yesterday.pacing.status
  }

  render () {
    return (
      <ul className="media-channel-list">
        {this.props.mediachannels ? this.props.mediachannels.map(mediachannel =>
          <li key={mediachannel.id} className="clearfix">
            <a href={`#media-channel-anchor-${this.props.campaignid + '-' + mediachannel.id}`} className="pull-left">{mediachannel.meta.name}</a>
            <span className={`pull-right line-items-count ${this.findStatusClass(mediachannel)}`}>({mediachannel.line_items.length})</span>
          </li>
        ) : null}
      </ul>
    )
  }
}

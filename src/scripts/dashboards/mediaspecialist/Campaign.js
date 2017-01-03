import React, { Component, PropTypes } from 'react'
import MediaChannels from './MediaChannels'

export default class Campaign extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="row campaign-list">
        {this.props.campaigns.length ? this.props.campaigns.map(campaign =>
          <div className="col-sm-12" key={campaign.id}>
            <p className="lead">{campaign.meta.name}</p>
            <MediaChannels mediachannels={campaign.media_channels} />
          </div>
        ) : null}
      </div>
    )
  }
}

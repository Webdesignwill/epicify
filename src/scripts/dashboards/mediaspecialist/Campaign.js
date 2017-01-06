import React, { Component, PropTypes } from 'react'
import MediaChannels from './MediaChannels'

export default class Campaign extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="row campaign-list">
        {this.props.campaigns.length ? this.props.campaigns.map(campaign =>
          <div className="col-sm-12 clearfix" key={campaign.id}>
            <p className="lead">{campaign.meta.name} <a className="pull-right text-size-sm" href="#"><i className="fa fa-link" aria-hidden="true"></i> Campaign Insights</a></p>
            <MediaChannels campaignid={campaign.id} mediachannels={campaign.media_channels} />
          </div>
        ) : <div className="empty-message"><p>Select a campaign</p></div>}
      </div>
    )
  }
}

import React, { Component, PropTypes } from 'react'
import LineItems from './LineItems'
import Tiles from './Tiles'

export default class MediaChannels extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="media-channels">
        {this.props.mediachannels.length ? this.props.mediachannels.map(mediachannel =>
          <div className="media-channel row" key={mediachannel.id}>
            <a name={`media-channel-anchor-${this.props.campaignid + '-' + mediachannel.id}`}></a>
            <Tiles mediachannel={mediachannel} />
            <LineItems lineitems={mediachannel.line_items} />
          </div>
        ) : null}
      </div>
    )
  }
}

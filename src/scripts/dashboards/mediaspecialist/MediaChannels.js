import React, { Component, PropTypes } from 'react'
import LineItems from './LineItems'

export default class MediaChannels extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="table media-channels">
        {this.props.mediachannels.length ? this.props.mediachannels.map(mediachannel =>
          <div className="media-channel" key={mediachannel.id}>
            <h4>{mediachannel.meta.name}</h4>
            <LineItems lineitems={mediachannel.line_items} />
          </div>
        ) : null}
      </div>
    )
  }
}

import React, { Component, PropTypes } from 'react'
import LineItems from './LineItems'
import StickyHeader from './StickyHeader'

export default class MediaChannels extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="media-channels row">
        <StickyHeader />
        {this.props.mediachannels.length ? this.props.mediachannels.map(mediachannel =>
          <div className="media-channel col-sm-12" key={mediachannel.id}>
            <h4 className="col-sm-12">{mediachannel.meta.name}</h4>
            <LineItems lineitems={mediachannel.line_items} />
          </div>
        ) : null}
      </div>
    )
  }
}

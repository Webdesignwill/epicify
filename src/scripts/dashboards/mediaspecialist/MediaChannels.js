import React, { Component, PropTypes } from 'react'
import LineItems from './LineItems'

export default class MediaChannels extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="table media-channels">
        {this.props.mediachannels.length ? this.props.mediachannels.map(mediachannel =>
          <div className="media-channel" key={mediachannel.id}>
            <div className="table-head">
              <div className="table-head-row">
                <span className="media-channel-header m__r text-bold">
                  {mediachannel.meta.name}
                </span>
                <span>
                  € {mediachannel.config.budget.network}
                  <i className="fa fa-caret-down m__l m__r" aria-hidden="true"></i>
                </span>
                <span>
                  € {mediachannel.config.budget.total}
                  <i className="fa fa-caret-down m__l" aria-hidden="true"></i>
                </span>
              </div>
            </div>
            <LineItems lineitems={mediachannel.line_items} />
          </div>
        ) : null}
      </div>
    )
  }
}

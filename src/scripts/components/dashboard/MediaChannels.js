import React, { Component, PropTypes } from 'react'
import LineItems from './LineItems'

export default class MediaChannels extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="media-channels">
        {this.props.mediachannels.length ? this.props.mediachannels.map(mediachannel =>
          <table key={mediachannel.id} className="table table-bordered">
            <thead>
              <tr>
                <th>
                  <span className="media-channel-header m__r">
                    {mediachannel.meta.name}
                  </span>
                  <span className="expand-data text-normal m__r">
                    € {mediachannel.config.budget.network}
                    <i className="fa fa-caret-down m__l" aria-hidden="true"></i>
                  </span>
                  <span className="expand-data text-normal">
                    € {mediachannel.config.budget.total}
                    <i className="fa fa-caret-down m__l" aria-hidden="true"></i>
                  </span>
                </th>
              </tr>
            </thead>
            <LineItems lineitems={mediachannel.line_items} />
          </table>
        ) : null}
      </div>
    )
  }
}

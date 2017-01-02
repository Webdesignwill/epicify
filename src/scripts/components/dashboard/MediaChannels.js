import React, { Component, PropTypes } from 'react'
import LineItems from './LineItems'

export default class MediaChannels extends Component {

  static propTypes = {}

  render () {
    return (
      <div>
        {this.props.mediachannels.length ? this.props.mediachannels.map(mediachannel =>
          <table key={mediachannel.id} className="table table-bordered">
            <thead>
              <tr>
                <th>{mediachannel.meta.name}</th>
              </tr>
            </thead>
            <LineItems lineitems={mediachannel.line_items} />
          </table>
        ) : null}
      </div>
    )
  }
}

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class MediaChannelList extends Component {

  static propTypes = {}

  render () {
    return (
      <div>
        {this.props.mediachannels ? this.props.mediachannels.map(mediachannel =>
          <ul key={mediachannel.id}>
            <li><a href="#">{mediachannel.meta.name}</a></li>
          </ul>
        ) : null}
      </div>
    )
  }
}

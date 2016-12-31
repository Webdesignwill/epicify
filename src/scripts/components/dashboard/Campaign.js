import React, { Component, PropTypes } from 'react'

export default class Campaign extends Component {

  static propTypes = {}

  render () {
    return (
      <div>
      {this.props.campaigns.length ? this.props.campaigns.map(campaign =>
        <p key={campaign.id}>Selected campaign : {campaign.id}</p>
      ) : null}
      </div>
    )
  }
}

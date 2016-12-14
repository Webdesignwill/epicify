import React, { Component, PropTypes } from 'react'

export default class Customer extends Component {

  static propTypes = {}

  render () {
    return (
      <div>{this.props.campaigns ? this.props.campaigns.map(campaign =>
        <p key={campaign.id}>
          {campaign.meta.name}
        </p>
      ) : null}</div>
    )
  }
}

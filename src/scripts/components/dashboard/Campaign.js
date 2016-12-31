import React, { Component, PropTypes } from 'react'

export default class Campaign extends Component {

  static propTypes = {}

  /* For campaign, we want to display only the selected campaign */

  render () {
    // if(!this.props.params.campaignid) {
    //   console.log('Dispaly all campaings')
    // } else {
    //   console.log('Display selected')
    // }
    return (
      <div>Campaign</div>
    )
  }
}

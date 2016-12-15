import React, { Component, PropTypes } from 'react'

export default class Campaign extends Component {

  static propTypes = {}

  render () {
    console.log('MY PROPS : ', this.props)
    return (
      <div>Campaign</div>
    )
  }
}

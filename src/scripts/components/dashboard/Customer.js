import React, { Component, PropTypes } from 'react'

export default class Customer extends Component {

  static propTypes = {}

  /* For Customer, we want to display all the customer tables n stuff, everything */

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

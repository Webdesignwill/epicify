import React, { Component, PropTypes } from 'react'

export default class Sidebar extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="list-group">
        {this.props.customers ? this.props.customers.map(customer =>
          <p key={customer.meta.name}>{customer.meta.name}</p>
        ) : null}
      </div>
    )
  }
}

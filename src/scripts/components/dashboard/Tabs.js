import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Tabs extends Component {

  static propTypes = {}

  render () {
    return (
      <ul className="nav nav-tabs">
        {this.props.customers ? this.props.customers.map(customer =>
          <li key={customer.id} role="presentation">
            <Link to={`/customer/${customer.id}`}>{customer.meta.name}</Link>
          </li>
        ) : null}
      </ul>
    )
  }
}

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Tabs extends Component {

  static propTypes = {}

  render () {

    const activeClass = (id) => {
      return this.props.params.customerid == id ? 'active' : '';
    }

    return (
      <ul className="nav nav-tabs">
        {this.props.customers ? this.props.customers.map(customer =>
          <li className={activeClass(customer.id)} key={customer.id} role="presentation">
            <Link to={`/customer/${customer.id}`}>{customer.meta.name}</Link>
          </li>
        ) : null}
      </ul>
    )
  }
}

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Sidebar extends Component {

  static propTypes = {}

  render () {
    return (
      <aside className="sidebar">
        <div className="sidebar-header">
          <h3>Customers</h3>
          <p>Please select the customers you would like to display information from</p>
        </div>
        <div className="list-group">
          {this.props.customers ? this.props.customers.map(customer =>
            <div className="list-group-item" key={customer.id}>
              <p className="lead select">{customer.meta.name} <i className="fa fa-plus" aria-hidden="true"></i></p>
              <Link to={`customers/${customer.id}`}>
                Campaigns <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </Link>
            </div>
          ) : null}
        </div>
      </aside>
    )
  }
}

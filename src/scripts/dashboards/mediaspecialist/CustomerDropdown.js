import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class CustomerDropdown extends Component {

  static propTypes = {}

  constructor (props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)

    this.state = {
      expanded: false
    }
  }

  clickHandler () {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }))
  }

  render () {

    const expandedClass = this.state.expanded ? 'expanded' : ''
    const caret = this.state.expanded ? 'up' : 'down'

    return (
      <div className="sidebar-group">
        <div className="sidebar-header">Customers</div>
        <div className={`list-group sidebar-dropdown ${expandedClass}`}>
          <div className="list-group-item clearfix" onClick={this.clickHandler}>
            <p className="lead select selected">Vodaphone <i className={`fa fa-caret-${caret}`} aria-hidden="true"></i></p>
          </div>
          {this.props.customers ? this.props.customers.map(customer =>
            <div className="list-group-item" key={customer.id}>
              <Link to={`/customer/${customer.id}`}>
                <p className="lead select">{customer.meta.name}</p>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

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

    window.scrollTo(0, 0)
  }

  render () {

    const expandedClass = this.state.expanded ? 'expanded' : ''
    const caret = this.state.expanded ? 'up' : 'down'
    const selectedText = this.props.customer ? this.props.customer.meta.name : "Select Customer"

    return (
      <div className={`sidebar-group ${expandedClass}`}>
        <div className="sidebar-header selectable" onClick={this.clickHandler}>{selectedText} <i className={`fa fa-caret-${caret}`} aria-hidden="true"></i></div>
        <div className="list-group sidebar-dropdown">
          {this.props.customers ? this.props.customers.map(customer =>
            <div className="list-group-item" key={customer.id} onClick={this.clickHandler}>
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

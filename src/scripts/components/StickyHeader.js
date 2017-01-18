
import React, { Component, PropTypes } from 'react'

export default class StickyHeader extends Component {
  render () {
    const customerName = this.props.customer && this.props.customer.meta.name || null
    return (
      <div className="sticky-header row">
        <h3 className="col-sm-12">{customerName}</h3>
      </div>
    )
  }
}

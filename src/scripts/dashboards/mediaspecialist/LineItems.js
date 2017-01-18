import React, { Component, PropTypes } from 'react'
import LineItem from './LineItem'
import TableHeader from './TableHeader'

export default class LineItems extends Component {

  static propTypes = {}

  constructor (props) {
    super(props)
    this.toggleLineItemData = this.toggleLineItemData.bind(this)
  }

  toggleLineItemData (index, action, event) {
    if(event) {
      event.stopPropagation()
    }

    this.refs['toggle-' + index].classList[action]('expanded')
  }

  render () {
    return (
      <div className="line-items col-sm-12 clearfix">
        <TableHeader />
        {this.props.lineitems.length ? this.props.lineitems.map((lineitem, index) =>
          <div className="line-items-wrapper" key={lineitem.id} ref={`toggle-${index}`} onClick={() => this.toggleLineItemData(index, 'add')}>
            <LineItem key={lineitem.id} lineitem={lineitem} />
            <div className="line-item-data">
              <span className="close" onClick={(event) => this.toggleLineItemData(index, 'remove', event)}>
                close <i className="fa fa-times" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

import React, { Component, PropTypes } from 'react'
import LineItems from '../../containers/dashboards/mediaspecialist/LineItems'
import TableHeader from './TableHeader'
import LineItemData from './LineItemData'

export default class LineItemsTable extends Component {

  static propTypes = {}

  constructor (props) {
    super(props)
    this.toggleLineItemData = this.toggleLineItemData.bind(this)
  }

  toggleLineItemData (index) {
    this.refs['toggle-' + index].classList.toggle('expanded')
  }

  render () {
    return (
      <div className="line-items col-sm-12 clearfix">
        <TableHeader />
        {this.props.lineitems.length ? this.props.lineitems.map((lineitem, index) =>
          <div className="line-items-wrapper" key={lineitem.id} ref={`toggle-${index}`}>
            <div onClick={(event) => this.toggleLineItemData(index)}>
              <LineItems key={lineitem.id} lineitem={lineitem} />
            </div>
            <LineItemData lineitem={lineitem} />
          </div>
        ) : null}
      </div>
    )
  }
}

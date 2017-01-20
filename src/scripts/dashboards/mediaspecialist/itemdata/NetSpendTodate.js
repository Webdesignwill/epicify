import React, { Component, PropTypes } from 'react'
import Currency from '../../../components/Currency'

export default class NetSpendTodate extends Component {

  static propTypes = {}

  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
  }

  toggle (event) {
    this.refs.toggle.classList.toggle('expanded')
  }

  render () {

    return (
      <div className="line-item-data-row" ref="toggle">
        <div className="data-row-header" onClick={(event) => this.toggle(event)}>
          Net spend media plan <em>(to date)</em> <i className="fa fa-expand pull-right" aria-hidden="true"></i><i className="fa fa-times pull-right" aria-hidden="true"></i>
        </div>
        <div className="data-row-content">
          <div className="inner">
            <p>Actual <span className="pull-right"><Currency amount={this.props.lineitem.data.to_date.spend.network.actual} /></span></p>
            <p>Target <span className="pull-right"><Currency amount={this.props.lineitem.data.to_date.spend.network.target} /></span></p>
            <hr />
            <p>Difference <span className="pull-right"><Currency amount={this.props.lineitem.data.to_date.spend.network.difference} /></span></p>
          </div>
        </div>
      </div>
    )
  }
}

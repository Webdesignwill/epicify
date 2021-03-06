import React, { Component, PropTypes } from 'react'
import Percentage from '../../../components/Percentage'

export default class Ctr extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="col-sm-4 tile single-row">
        <div className="tile-inner">
          <strong className="tile-title col-sm-7">CTR</strong>
          <div className="col-sm-2 percent">
            <Percentage status={this.props.mediachannel.data.to_date.ctr.status} percentage={this.props.mediachannel.data.to_date.ctr.actual} />
          </div>
          <div className="col-sm-2 target">
            {this.props.mediachannel.data.to_date.ctr.target ? <em>(<Percentage percentage={this.props.mediachannel.data.to_date.ctr.target} />)</em> : null}
          </div>
        </div>
      </div>
    )
  }
}

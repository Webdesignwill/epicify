import React, { Component, PropTypes } from 'react'

export default class LineItems extends Component {

  static propTypes = {}

  render () {
    console.log(this.props.lineitems)
    return (
      <div className="table-body">
        {this.props.lineitems.length ? this.props.lineitems.map(lineitem =>
          <div key={lineitem.id}>
            <div className="clearfix table-row">
              <div className="">
                {lineitem.meta.name} <span className="pull-right">{lineitem.media_plan.meta.name}</span>
              </div>
              <div className="">
                Something
              </div>
              <div className="">
                Something
              </div>
              <div className="">
                Something
              </div>
              <div className="">
                Something
              </div>
              <div className="">
                Something
              </div>
              <div className="">
                Something
              </div>
              <div className="">
                Something
              </div>
              <div className="">
                Something
              </div>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

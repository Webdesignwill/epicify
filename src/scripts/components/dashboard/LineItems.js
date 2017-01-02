import React, { Component, PropTypes } from 'react'

export default class LineItems extends Component {

  static propTypes = {}

  render () {
    return (
      <tbody>
        {this.props.lineitems.length ? this.props.lineitems.map(lineitem =>
          <tr key={lineitem.id}>
            <td className="clearfix" colSpan="5">
              {lineitem.meta.name} <span className="pull-right">{lineitem.media_plan.meta.name}</span>
            </td>
          </tr>
        ) : null}
      </tbody>
    )
  }
}

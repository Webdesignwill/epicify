import React, { Component, PropTypes } from 'react'

export default class LineItems extends Component {

  static propTypes = {}

  render () {
    console.log('line items : ', this.props.lineitems)
    return (
      <tbody>
        {this.props.lineitems.length ? this.props.lineitems.map(lineitem =>
          <tr key={lineitem.id}>
            <td>{lineitem.meta.name}</td>
          </tr>
        ) : null}
      </tbody>
    )
  }
}

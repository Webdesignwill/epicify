
import React, { Component, PropTypes } from 'react'

export default class Application extends Component {
  render () {
    return (
      <div>
        <main role="main">
          <div className="container">{this.props.children}</div>
        </main>
      </div>
    )
  }
}

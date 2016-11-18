
import React from 'react'

export default class Application extends React.Component {
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


import React, { Component, PropTypes } from 'react'

export default class Header extends Component {
  render () {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Epicify</a>
        </div>
      </nav>
    )
  }
}


import React, { Component, PropTypes } from 'react'
import Header from '../components/Header'

export default class Application extends Component {
  render () {
    return (
      <div>
        <Header />
        <main role="main">{this.props.children}</main>
      </div>
    )
  }
}

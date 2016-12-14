import React, { Component, PropTypes } from 'react'
import { fetchData } from '../actions/dashboard'
import Sidebar from '../containers/Sidebar'

export default class Dashboard extends Component {

  static propTypes = {}

  componentDidMount() {
    this.props.dispatch(fetchData())
  }

  render () {
    return (
      <div>
        <Sidebar />
        <main role="main" className="table-container">
          {this.props.children}
        </main>
      </div>
    )
  }
}

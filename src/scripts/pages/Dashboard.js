import React, { Component, PropTypes } from 'react'
import { fetchData } from '../actions/dashboard'
import Sidebar from '../containers/Sidebar'
import Tabs from '../containers/dashboard/Tabs'

export default class Dashboard extends Component {

  static propTypes = {}

  componentDidMount() {
    this.props.dispatch(fetchData())
  }

  render () {
    return (
      <div>
        <Sidebar params={this.props.params} />
        <main role="main" className="table-container">
          <Tabs params={this.props.params} />
          {this.props.children}
        </main>
      </div>
    )
  }
}

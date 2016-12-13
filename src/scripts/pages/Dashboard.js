import React, { Component, PropTypes } from 'react'
import { fetchData } from '../actions/dashboard'
import Sidebar from '../components/Sidebar'

export default class Dashboard extends Component {

  static propTypes = {}

  componentDidMount() {
    this.props.dispatch(fetchData())
  }

  render () {
    return (
      <div>
        <Sidebar customers={this.props.customers} />
      </div>
    )
  }
}

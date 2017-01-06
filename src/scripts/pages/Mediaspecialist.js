import React, { Component, PropTypes } from 'react'
import { fetchData } from '../actions/dashboards/mediaspecialist'
import Sidebar from '../containers/Sidebar'

export default class Mediaspecialist extends Component {

  static propTypes = {}

  componentDidMount() {
    this.props.dispatch(fetchData())
  }

  render () {
    return (
      <div className="container">
        <Sidebar params={this.props.params} campaignids={this.props.location.query.campaignid}/>
        <main role="main" className="table-container">
          {this.props.children}
        </main>
      </div>
    )
  }
}

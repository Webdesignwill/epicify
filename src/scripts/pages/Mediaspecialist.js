import React, { Component, PropTypes } from 'react'
import { fetchData } from '../actions/dashboards/mediaspecialist'
import Sidebar from '../containers/Sidebar'
import Tabs from '../containers/dashboards/mediaspecialist/Tabs'

export default class Mediaspecialist extends Component {

  static propTypes = {}

  componentDidMount() {
    this.props.dispatch(fetchData())
  }

  render () {
    return (
      <div>
        <Sidebar params={this.props.params} campaignids={this.props.location.query.campaignid}/>
        <main role="main" className="table-container">
          <Tabs params={this.props.params} />
          {this.props.children}
        </main>
      </div>
    )
  }
}

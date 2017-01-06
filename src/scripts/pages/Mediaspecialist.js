import React, { Component, PropTypes } from 'react'
import { fetchData } from '../actions/dashboards/mediaspecialist'
import Sidebar from '../containers/Sidebar'
import ApplicationHeader from '../components/ApplicationHeader'

export default class Mediaspecialist extends Component {

  static propTypes = {}

  componentDidMount() {
    this.props.dispatch(fetchData())
  }

  render () {
    return (
      <div className="container">
        <Sidebar params={this.props.params} campaignids={this.props.location.query.campaignid}/>
        <main role="main">
          <a name="top"></a>
          <div className="table-container">
            {this.props.children}
            {this.props.params.customerid === undefined ?
              <div className="empty-message">
                <p>Select a customer</p>
              </div> : null}
          </div>
        </main>
      </div>
    )
  }
}

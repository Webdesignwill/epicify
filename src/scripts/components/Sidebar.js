import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Sidebar extends Component {

  static propTypes = {}

  constructor (props) {
    super(props)
    this.makeUrl = this.makeUrl.bind(this)
    this.toggleClass = this.toggleClass.bind(this)
  }

  makeUrl (id) {

    if(!this.props.campaignids) {
      return [id]
    }

    if(typeof this.props.campaignids === 'string') {
      let campaignid = parseInt(this.props.campaignids)
      if(campaignid === id) {
        return []
      }
      return [campaignid, id]
    }

    if(typeof this.props.campaignids === 'object') {
      let newArray = [...this.props.campaignids]

      if(newArray.indexOf(id.toString()) > -1) {
        newArray.splice(newArray.indexOf(id.toString()), 1)
      } else {
        newArray.push(id.toString())
      }

      return newArray
    }
  }

  toggleClass (id) {

    if(!this.props.campaignids || this.props.campaignids.indexOf(id.toString()) === -1) {
      return "fa fa-plus"
    }

    return "fa fa-minus"
  }

  render () {
    return (
      <aside className="sidebar">
        <div className="sidebar-header"></div>
        <div className="list-group">
          {this.props.campaigns ? this.props.campaigns.map(campaign =>
            <div className="list-group-item" key={campaign.id}>
              <Link name={campaign.id} to={{ pathname: `/customer/${this.props.params.customerid}`, query: { campaignid: this.makeUrl(campaign.id) }}}>
                <p className="lead select">{campaign.meta.name} <i className={this.toggleClass(campaign.id)} aria-hidden="true"></i></p>
              </Link>
            </div>
          ) : null}
        </div>
      </aside>
    )
  }
}

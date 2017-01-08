import React, { Component, PropTypes } from 'react'
import LineItems from './LineItems'
import StickyHeader from './StickyHeader'

export default class MediaChannels extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="media-channels row">
        {this.props.mediachannels.length ? this.props.mediachannels.map(mediachannel =>
          <div className="media-channel col-sm-12" key={mediachannel.id}>
            <a name={`media-channel-anchor-${this.props.campaignid + '-' + mediachannel.id}`}></a>
            <h4 className="col-sm-12">{mediachannel.meta.name}</h4>

            <StickyHeader />
            <div className="col-sm-12 media-channel-totals">
              <div className="totals-row">
                <div className="col-sm-offset-1 col-sm-1 total">
                  <div className="content">
                    100%
                  </div>
                </div>
                <div className="col-sm-1 total">
                  <div className="content">
                    100%
                  </div>
                </div>
                <div className="col-sm-1 total">
                  <div className="content">
                    100%
                  </div>
                </div>
                <div className="col-sm-offset-5 col-sm-1 total">
                  <div className="content">
                    <div>€ 154 <span className="lightgrey">(€ 80)</span></div>
                  </div>
                </div>
                <div className="col-sm-1 total">
                  <div className="content">
                    <div>€ 154 <span className="lightgrey">(€ 80)</span></div>
                  </div>
                </div>
                <div className="col-sm-1 total">
                  <div className="content">
                    <div>€ 154 <span className="lightgrey">(€ 80)</span></div>
                  </div>
                </div>
              </div>
            </div>

            <LineItems lineitems={mediachannel.line_items} />
          </div>
        ) : null}
      </div>
    )
  }
}

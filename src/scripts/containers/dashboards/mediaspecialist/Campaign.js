import { connect } from 'react-redux';
import Campaign from '../../../dashboards/mediaspecialist/Campaign';

function mapStateToProps(store, props) {

  let campaigns = []
  let customer = null

  if(!!store.customers.data) {
    customer = store.customers.data.filter((customer) => {
      if(customer.id === parseInt(props.params.customerid)) {
        return customer.campaigns
      }
    })[0]

    if(typeof props.location.query.campaignid === 'string') {
      campaigns = customer.campaigns.filter((campaign) => {
        if(props.location.query.campaignid.indexOf(campaign.id) > -1) {
          return campaign
        }
      })
    } else if (typeof props.location.query.campaignid === 'object') {
      campaigns = customer.campaigns.filter((campaign) => {
        if(props.location.query.campaignid.indexOf(campaign.id.toString()) > -1) {
          return campaign
        }
      })
    }
  }

  return {
    campaigns,
    customer
  }
}

export default connect(mapStateToProps)(Campaign);

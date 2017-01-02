import { connect } from 'react-redux';
import Campaign from '../../components/dashboard/Campaign';

function mapStateToProps(store, props) {

  let campaigns = []

  if(!!store.customers.data) {
    let customer = store.customers.data.filter((customer) => {
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
    } else {
      campaigns = customer.campaigns
    }
  }

  return {
    campaigns: campaigns
  }
}

export default connect(mapStateToProps)(Campaign);

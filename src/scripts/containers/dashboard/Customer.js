import { connect } from 'react-redux';
import Customer from '../../components/dashboard/Customer';

function mapStateToProps(store, query) {

  let campaigns = [];

  if(!!store.customers.data) {
    store.customers.data.map((customer) => {
      if(parseInt(query.params.customerid) === customer.id) {
        campaigns = customer.campaigns
      }
    })
  }

  return {
    campaigns
  }
}

export default connect(mapStateToProps)(Customer);

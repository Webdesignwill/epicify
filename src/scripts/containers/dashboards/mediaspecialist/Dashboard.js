import { connect } from 'react-redux';
import Dashboard from '../../../pages/Mediaspecialist';

function mapStateToProps(store, props) {
  let customer

  if(!!store.customers.data) {
    customer = store.customers.data.filter((customer) => {
      if(customer.id === parseInt(props.params.customerid)) {
        return customer
      }
    })[0]
  }

  return {
    customer
  }
}

export default connect(mapStateToProps)(Dashboard);

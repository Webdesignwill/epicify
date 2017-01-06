import { connect } from 'react-redux';
import CustomerDropdown from '../../../dashboards/mediaspecialist/CustomerDropdown';

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
    customer: customer,
    customers: store.customers.data
  }
}

export default connect(mapStateToProps)(CustomerDropdown);

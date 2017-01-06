import { connect } from 'react-redux';
import CustomerDropdown from '../../../dashboards/mediaspecialist/CustomerDropdown';

function mapStateToProps(store, query) {
  return {
    customers: store.customers.data
  };
}

export default connect(mapStateToProps)(CustomerDropdown);

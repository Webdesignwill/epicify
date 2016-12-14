import { connect } from 'react-redux';
import Customers from '../../components/dashboard/Customers';

function mapStateToProps(store) {
  return {
    customers: store.dashboard.customers
  };
}

export default connect(mapStateToProps)(Customers);

import { connect } from 'react-redux';
import Customer from '../../components/dashboard/Customer';

function mapStateToProps(store) {
  return {
    customers: store.customers.data
  };
}

export default connect(mapStateToProps)(Customer);

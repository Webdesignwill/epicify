import { connect } from 'react-redux';
import Dashboard from '../../pages/Dashboard';

function mapStateToProps(store) {
  return {
    customers: store.customers.data
  };
}

export default connect(mapStateToProps)(Dashboard);

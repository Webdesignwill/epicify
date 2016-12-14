import { connect } from 'react-redux';
import Dashboard from '../../pages/Dashboard';

function mapStateToProps(store) {
  return {
    customers: store.dashboard.customers
  };
}

export default connect(mapStateToProps)(Dashboard);

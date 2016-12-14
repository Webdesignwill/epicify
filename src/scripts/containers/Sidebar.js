import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

function mapStateToProps(store) {
  return {
    customers: store.dashboard.customers
  };
}

export default connect(mapStateToProps)(Sidebar);

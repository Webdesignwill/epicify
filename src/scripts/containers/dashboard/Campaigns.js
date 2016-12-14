import { connect } from 'react-redux';
import Campaigns from '../../components/dashboard/Campaigns';

function mapStateToProps(store) {
  return {
    customers: store.dashboard.customers
  };
}

export default connect(mapStateToProps)(Campaigns);

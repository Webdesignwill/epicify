import { connect } from 'react-redux';
import Tabs from '../../components/dashboard/Tabs';

function mapStateToProps(store, query) {
  return {
    customers: store.customers.data
  };
}

export default connect(mapStateToProps)(Tabs);

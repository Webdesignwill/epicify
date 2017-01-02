import { connect } from 'react-redux';
import Tabs from '../../../dashboards/mediaspecialist/Tabs';

function mapStateToProps(store, query) {
  return {
    customers: store.customers.data
  };
}

export default connect(mapStateToProps)(Tabs);

import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'

function mapStateToProps(store, props) {

  let campaigns = []
  let customer

  if(!!store.customers.data) {
    customer = store.customers.data.filter((customer) => {
      if(customer.id === parseInt(props.params.customerid)) {
        return customer
      }
    })[0]
  }

  if(!!store.customers.data) {
    store.customers.data.map((customer) => {
      if(parseInt(props.params.customerid) === customer.id) {
        campaigns = customer.campaigns
      }
    })
  }

  return {
    customer,
    campaigns
  }
}

export default connect(mapStateToProps)(Sidebar)

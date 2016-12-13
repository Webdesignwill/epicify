import { connect } from 'react-redux'
import Posts from '../../pages/Posts'

function mapStateToProps(store) {
  return {
    posts : store.posts.data
  };
}

export default connect(mapStateToProps)(Posts);

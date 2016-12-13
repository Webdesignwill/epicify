import { connect } from 'react-redux';
import Post from '../../pages/Post';

function mapStateToProps(store) {
  return {
    body: store.post.body,
    id: store.post.id,
    title: store.post.title,
    userId: store.post.userId
  };
}

export default connect(mapStateToProps)(Post);

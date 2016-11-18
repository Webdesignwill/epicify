
import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './../actions/users'

@connect((store) => {
  return {
    "users" : store.users.data
  }
})

export default class Index extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }

  render () {

    const { users } = this.props
    const mappedUsers = this.props.users.map(user => <li key={ user.id }>{ user.name }</li>)

    return (
      <div>
        <ul>
          { mappedUsers }
        </ul>
      </div>
    )
  }
}

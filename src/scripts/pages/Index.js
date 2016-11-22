
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './../actions/users'

@connect((store) => {
  return {
    "name" : store.users.name
  }
})

export default class Index extends Component {

  static propTypes = {
    "name" : PropTypes.string
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }

  render () {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

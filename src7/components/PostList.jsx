import React, { useEffect, Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { colours } from "../utils/semanticColours"
import UserHeader from './UserHeader'

class PostList extends Component {

  componentDidMount() {
    this.props.fetchPostsAndUsers()
  }

  renderPosts() {
    let i = 0
    return this.props.posts.map(({id, title, body, userId}) => {
      const colour = colours[++i % colours.length]
      return (
      <div className='item' key={id}>
        <i className={`large middle aligned icon user ${colour}`} />
        <div className='content'>
          <div className='description'>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <UserHeader userId={userId}/>
        </div>
      </div>
  ) }) }

  render() {
    return (
      <div className='ui very relaxed list'>{this.renderPosts()}</div>
    )
  }
}

function mapStateToProps({ posts }) {
  return { posts }
}

export default connect(mapStateToProps, actions)(PostList)

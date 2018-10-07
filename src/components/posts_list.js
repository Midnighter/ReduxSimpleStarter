import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions';

class PostsList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    debugger;
    const posts = this.props.posts;
    if (!posts || Object.keys(posts).length === 0) {
      return (<li className="list-group-item" key="-1">Empty!</li>);
    }
    return Object.keys(posts).map((key, index) => {
      const post = posts[key];
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return posts;
}

export default connect(mapStateToProps, { fetchPosts })(PostsList);

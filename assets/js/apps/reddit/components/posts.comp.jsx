import React from 'react';

const {
  array
} = React.PropTypes;


const Posts = ({posts}) => (
  <ul>
    {posts.map((post, i) =>
      <li key={i}>{post.title}</li>
    )}
  </ul>
)

Posts.propTypes = {
  posts: array.isRequired
};

export default Posts

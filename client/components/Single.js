import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { postId } = this.props.params;
    // const i = this.props.posts.findIndex((post) => post.code = postId);
    const post = this.props.posts.filter((post) => post.code === postId)[0];
    const postComments = this.props.comments[postId] || [];
    return (
      <div className='single-photo'>
        <Photo {...this.props} post={post} i={postId} />
        <Comments {...this.props} postComments={postComments} i={postId} />
      </div>
    )
  }
});

export default Single;
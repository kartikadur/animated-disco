import React from 'react';

const Comments = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    const { i } = this.props;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;

    this.props.addComment(i, author, comment);
    this.refs.commentForm.reset();
  },
  renderComment(comment, i) {
    const { removeComment } = this.props;
    return (
      <div key={i} className="comment">
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment' onClick={removeComment.bind(null, this.props.i, i)}>&times;</button>
        </p>
      </div>
    );
  },
  render() {
    const { postComments, i } = this.props;
    return (
      <div className="comments">
        {postComments.map(this.renderComment)}
        <form ref='commentForm' className="comment-form" onSubmit={this.handleSubmit}>
          <input className="" type="text" ref="author" placeholder='author' />
          <input className="" type="text" ref="comment" placeholder='comment' />
          <input type="submit" hidden />
        </form>
      </div>
    );
  },
});

export default Comments;
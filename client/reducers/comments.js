function postComment(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, { user: action.author, text: action.comment }];

    case 'REMOVE_COMMENT':
      console.log(state, action);
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    // return state.filter((el, i) => i !== action.index);

    default:
      return state;
  }
};

function comments(state = [], action) {
  if (action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComment(state[action.postId], action),
    };
  }
};


export default comments;
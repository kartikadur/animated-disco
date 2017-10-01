function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      return [
        ...state.slice(0, i), // before the element to be modified
        { ...state[i], likes: state[i].likes + 1 }, // element to be modified
        ...state.slice(i + 1), // after the element to be modified
      ];
      break;
    case 'DECREMENT_LIKES':
      break;
    default:
      return state;
  }
};

export default posts;
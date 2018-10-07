import { FETCH_POST, FETCH_POSTS, DELETE_POST } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      const posts = action.payload.data.reduce((result, item) => {
        result[item.id] = item;
        return result;
      }, {});
      return { posts };
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case DELETE_POST:
      return Object.keys(state.posts).reduce((result, item) => {
        if (item.id === action.payload) {
          return result;
        }
        result[item.id] = item;
        return result;
      }, {});
    default:
      return state;
  }
}

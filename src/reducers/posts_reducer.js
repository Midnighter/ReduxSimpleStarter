import { FETCH_POSTS } from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        posts: action.payload.data.reduce((result, item) => {
          result[item.id] = item;
          return result;
        }, {})
      };
    default:
      return state;
  }
}

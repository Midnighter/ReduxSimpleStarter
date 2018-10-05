import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const API_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'barf2019';

export function fetchPosts() {
  const url = `${API_URL}/posts`;
  console.debug('Making get request to', url);
  const request = axios.get(url, { params: { key: API_KEY } });
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

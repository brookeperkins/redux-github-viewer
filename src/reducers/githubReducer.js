import { SET_USER, SET_FOLLOWERS, SET_REPOS } from '../actions/githubActions';

const initialState = {
  user: '',
  followers: 0,
  repos: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_FOLLOWERS:
      return { ...state, followers: action.payload };
    case SET_REPOS:
      return { ...state, repos: action.payload };
    default:
      return state;
  }
}

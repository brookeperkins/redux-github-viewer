import { SET_USER } from '../actions/githubActions';

const initialState = {
  user: '',
  followers: 0,
  repos: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

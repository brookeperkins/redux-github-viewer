import reducer from './githubReducer';
import { setUser } from '../actions/githubActions';

describe('github reducer', () => {
  it('handles the SET_USER action', () => {
    const state = {
      user: '',
      followers: 0,
      repos: []
    };

    const action = setUser('BobHopeFan72');

    const newState = reducer(state, action);

    expect(newState).toEqual({
      user: 'BobHopeFan72',
      followers: 0,
      repos: []
    });
  });
});

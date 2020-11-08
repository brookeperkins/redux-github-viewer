import reducer from './githubReducer';
import { setUser, setFollowers } from '../actions/githubActions';

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

  it('handles the SET_FOLLOWERS action', () => {
    const state = {
      user: '',
      followers: 0,
      repos: []
    };

    const action = setFollowers(25);

    const newState = reducer(state, action);

    expect(newState).toEqual({
      user: '',
      followers: 25,
      repos: []
    });
  });
});

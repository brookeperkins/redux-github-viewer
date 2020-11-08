import reducer from './githubReducer';
import { setUser, setRepos } from '../actions/githubActions';

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

  it('handles the SET_REPOS action', () => {
    const state = {
      user: '',
      followers: 0,
      repos: []
    };

    const action = setRepos([
      { repoName: 'bobHopeFan73-todo-list' },
      { repoName: 'welcome-2-my-app' }
    ]);

    const newState = reducer(state, action);

    expect(newState).toEqual({
      user: '',
      followers: 0,
      repos: [
        { repoName: 'bobHopeFan73-todo-list' },
        { repoName: 'welcome-2-my-app' }
      ] });
  });
});

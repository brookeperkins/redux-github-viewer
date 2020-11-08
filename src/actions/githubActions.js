export const SET_USER = 'SET_USER';
export const setUser = user => ({
  type: SET_USER,
  payload: user
});

export const SET_FOLLOWERS = 'SET_FOLLOWERS';
export const setFollowers = followers => ({
  type: SET_FOLLOWERS,
  payload: followers
});

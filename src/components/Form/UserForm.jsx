import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, fetchRepos, setSearch } from '../../actions/githubActions';

const UserForm = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.search);
  
  const handleChange = ({ target }) => {
    dispatch(setSearch(target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchUser(search));
    dispatch(fetchRepos(search));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:
        <textarea onChange={handleChange} placeholder="username"></textarea>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default UserForm;

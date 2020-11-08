import React from 'react';
import UserForm from '../Form/UserForm';
import RepoList from '../Repos/Repos';
import User from '../User/User';

export default function App() {
  return (
    <>
      <UserForm />
      <User />
      <RepoList />
    </>
  );
}

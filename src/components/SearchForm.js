import React from 'react';

import useGlobal from '../store';

const SearchForm = () => {
  const [globalState, globalActions] = useGlobal();
  const searchSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    globalActions.github.getReposByUsername(username);
  };
  return (
    <form onSubmit={searchSubmit}>
      <input name="username" placeholder="username" autoComplete="off" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

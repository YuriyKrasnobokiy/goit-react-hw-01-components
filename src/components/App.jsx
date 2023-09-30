import React from 'react';
import user from '../user/user.json';
import data from '../data/data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        tag={user.tag}
        username={user.username}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
export default App;

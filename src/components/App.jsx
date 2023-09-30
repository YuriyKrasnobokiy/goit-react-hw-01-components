import React from 'react';
import user from '../user/user.json';

import { Profile } from './Profile/Profile';

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
    </>
  );
};
export default App;

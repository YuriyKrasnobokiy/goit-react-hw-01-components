import React from 'react';
import user from '../user/user.json';
import data from '../data/data.json';
import friends from '../friends/friends.json';
import transactions from '../transactions/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transactions/Transactions';

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
export default App;

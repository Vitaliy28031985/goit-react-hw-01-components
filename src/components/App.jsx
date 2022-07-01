import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendListItem } from 'components/Friend/Friend';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from 'path/to/user.json';
import data from 'path/to/data.json';
import friends from 'path/to/friends.json';
import transactions from 'path/to/transactions.json';


// const a = JSON.parse(user);


export const App = () => {
  return (
    <div>
 <Profile items={user}/>
 <Statistics title="Upload stats" stats={data}/>
 <FriendListItem friends={friends}/>
 <TransactionHistory items={transactions}/>
    </div>
  );
};

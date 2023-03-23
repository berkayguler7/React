import Header from './components/Header';
import './App.css';
import User from './components/User';

const name = 'John Doe';
const isLoggedIn = true;
const friends = [
  {id: 1,name: 'John', age: 22},
  {id: 2,name: 'Jane', age: 23},
  {id: 3,name: 'Jack'},
];

function App() {
  return (
    <div>
      <Header />
      <User 
        name={name} 
        isLoggedIn={isLoggedIn} age={26}
        friends={friends}
        />
      <p className='xyz'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <label htmlFor='myinput'>
        Name
        <input type='text' id='myinput' />
      </label>
    </div>
  );
}

export default App;

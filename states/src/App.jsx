import { useState } from "react";
import Counter from "./components/Counter";
import InputExample from "./components/InputExample";
function App() {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(26);
  const [friends, setFriends] = useState([
    { id: 1, name: "John", age: 22 },
    { id: 2, name: "Jane", age: 23 },
    { id: 3, name: "Jack" },
  ]);
  const [address, setAddress] = useState({
    street: "123 Main St",
    city: "Anytown",
    zip: "12345",
  });

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <h2>Age: {age}</h2>

      <button onClick={() => setName("Jane Doe")}>Change Name</button>
      <button onClick={() => setAge(27)}>Change Age</button>

      <hr />
      <br />

      {friends.map((friend) => (
        <div key={friend.id}>
          {friend.name} {friend.age && `(${friend.age})`}

        </div>
      ))}
      <button onClick={() => setFriends([...friends, { id: friends.length + 1, name: "Jill" }])}>Add Friend</button>

      <hr />
      <br />

      <h2>Address</h2>
      <div>
        {`${address.street} ${address.zip} ${address.city}`}
      </div>

      <button onClick={() => setAddress({ ...address, city: 'İzmir', zip: '35390' })}>Change Address</button>
      
      <hr />
      <br />

      <Counter />

      <hr />
      <br />

      <InputExample />
      <br /><br />
    </div>
  );
}

export default App;

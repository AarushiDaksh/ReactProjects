import { useState, useEffect } from 'react';
import './App.css';
import ProductCard from './components/productCard'; 

function App() {
  const [name, setName] = useState('abc');
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const changeName = () => setName('Voqit');
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const fetchUsers = async () => {
    
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
   
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1 className="text-6xl font-bold text-blue-500">Learning Hooks</h1>
      <br />
      <p>Current Name: {name}</p>
      <button onClick={changeName}>Change Name</button>

      <hr />

      <p>Counter</p>
      <button onClick={increment} style={{ fontSize: '24px' }}>🍉</button>
      <span style={{ fontSize: '24px', margin: '0 10px' }}>{count}</span>
      <button onClick={decrement} style={{ fontSize: '24px' }}>🐟</button>

      <hr />

      <h2 className="text-2xl font-semibold my-4">User List</h2>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 mb-6 w-full max-w-md block mx-auto"
      />

      {filteredUsers.length === 0 ? (
        <p className="text-gray-500 text-center">No users found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredUsers.map((user) => (
            <ProductCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;

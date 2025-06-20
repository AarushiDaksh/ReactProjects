import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';


import { EditProfile } from './pages/EditProfile';
import Home from './pages/Home';
import Signup from './pages/signup'; 
import Signin from './pages/signin';

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
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/signin" element={<Signin />} /> 
        
        <Route
          path="/hooks"
          element={
            <>
              <h1 className="text-6xl font-bold text-blue-500">Learning Hooks</h1>
              <p>Current Name: {name}</p>
              <button onClick={changeName}>Change Name</button>

              <hr />

              <p>Counter</p>
              <button onClick={increment} style={{ fontSize: '24px' }}>🍉</button>
              <span style={{ fontSize: '24px', margin: '0 10px' }}>{count}</span>
              <button onClick={decrement} style={{ fontSize: '24px' }}>🐟</button>

              <hr />
              <h2 className="text-2xl font-semibold my-4">User List</h2>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

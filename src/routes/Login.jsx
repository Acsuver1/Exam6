import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Alert } from 'antd';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const mockUsers = [
    { username: 'emilys', password: 'emilyspass' },
];

const handleSubmit = async () => {
    setError(null);
    try {
        const user = mockUsers.find(
            (u) => u.username === username && u.password === password
        );

        if (user) {
            navigate('/products');
        } else {
            setError('Invalid username or password');
        }
    } catch (err) {
        console.error(err);
        setError('An error occurred');
    }
};
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br rounded-lg  from-blue-600 to-indigo-900">
    <div className="w-96 p-8 bg-white rounded-lg shadow-2xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Sign in to eBay</h2>
      <p className="text-sm text-gray-600 mb-8">
        Sign in to eBay or{' '}
        <a href="#" className="text-blue-500 hover:underline">
          create an account
        </a>
      </p>
      
      {error && <Alert message={error} type="error" className="mb-4" />}
  
      <Input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full mb-4 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 transition"
      />
  
      <Input.Password
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-6 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 transition"
      />
  
      <p className="text-sm text-blue-500 text-right mb-6 hover:underline cursor-pointer">
        Forgot Password?
      </p>
  
      <Link to="/Collection">
        <Button
          type="primary"
          onClick={handleSubmit}
          className="w-full py-3 text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300"
        >
          Continue
        </Button>
      </Link>
    </div>
  </div>
  
  )
}

export default Login
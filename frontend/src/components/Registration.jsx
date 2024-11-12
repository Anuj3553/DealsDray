import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const SERVER_PORT = process.env.REACT_APP_SERVER_PORT || "https://dealsdray-9sfu.onrender.com" || "http://localhost:4001";

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfPassword, setCnfPassword] = useState('');
  const navigate = useNavigate();

  const submitForm = () => {
    const payload = { name, email, password };

    if (!name || !email || !password || !cnfPassword) {
      alert("Please fill in all fields to register.");
    } else if (password === cnfPassword) {
      axios
        .post(`${SERVER_PORT}/register`, payload)
        .then((response) => {
          alert(response.data);
          navigate('/');
        })
        .catch(() => {
          alert("There was an issue sending data to the backend.");
        });
    } else {
      alert("Passwords do not match.");
    }
  };

  return (
    <div className='bg-neutral-300 h-max'>
      <div className='max-w-[940px] h-[500px] border-4 border-blue-900 mx-auto relative shadow-xl scale-75 p-[10px]'>
        <h1 className='text-center font-bold text-2xl my-3'>Admin Registration Form</h1>
        <div className='border border-red-600 max-w-[300px] mx-auto my-5 p-10'>
          <input
            className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black'
            placeholder='Enter Full Name'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black'
            placeholder='Enter Email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black'
            placeholder='Enter Password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black'
            placeholder='Retype Password'
            type="password"
            value={cnfPassword}
            onChange={(e) => setCnfPassword(e.target.value)}
            required
          />
          <button className='bg-red-300 ml-5 rounded-lg p-1' onClick={submitForm}>
            Register Me
          </button>
          <p>
            Already have an account? <Button variant="outlined"><Link to='/'>Sign In</Link></Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;

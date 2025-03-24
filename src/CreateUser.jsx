import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios.post('https://server-tchy.onrender.com/createUser', { name, email, age })
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-dark'>
      <div className='col-lg-4 col-md-6 p-5 border rounded-4 shadow-lg bg-white'>
        <h2 className='text-center text-success mb-4'>Create New Account</h2>
        <form onSubmit={Submit}>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label fw-semibold text-dark'>Full Name</label>
            <input 
              type='text' 
              id='name' 
              placeholder='John Doe' 
              className='form-control form-control-lg' 
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='email' className='form-label fw-semibold text-dark'>Email Address</label>
            <input 
              type='email' 
              id='email' 
              placeholder='example@email.com' 
              className='form-control form-control-lg' 
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='age' className='form-label fw-semibold text-dark'>Age</label>
            <input 
              type='number' 
              id='age' 
              placeholder='Enter your age' 
              className='form-control form-control-lg' 
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <button className='btn btn-success w-100 py-3 fw-semibold'>
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
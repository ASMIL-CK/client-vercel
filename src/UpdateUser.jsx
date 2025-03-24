import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate} from 'react-router-dom'


function UpdateUser()  {
  const {id} = useParams()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('https://server-tchy.onrender.com/getUser/'+id)
    .then(result => {console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch(err => console.log(err))
   }, [])

   const Update = (e) => {
    e.preventDefault();
    axios.put("https://server-tchy.onrender.com/updateUser/"+id, {name, email, age})
    .then(result =>{
       console.log(result)
       navigate('/')
      })
    .catch(err => console.log(err))
   }

  return (
    
    <div className='d-flex vh-100 bg-light justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded-4 shadow-lg p-4'>
        <form onSubmit={Update} className="needs-validation" noValidate>
            <h2 className="text-center mb-4">Update User</h2>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">Name</label>
                <input
                    type="text"
                    placeholder="Enter Name"
                    className="form-control border-2 border-primary"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <div className="invalid-feedback">Please enter a name.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">Email</label>
                <input
                    type="email"
                    placeholder="Enter Email"
                    className="form-control border-2 border-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className="invalid-feedback">Please enter a valid email.</div>
            </div>
            <div className="mb-4">
                <label htmlFor="age" className="form-label fw-bold">Age</label>
                <input
                    type="number"
                    placeholder="Enter Age"
                    className="form-control border-2 border-primary"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
                <div className="invalid-feedback">Please enter a valid age.</div>
            </div>
            <button className='btn btn-primary w-100 py-2 fw-bold'>Update</button>
        </form>
    </div>
</div>
  )
}

export default UpdateUser
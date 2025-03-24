import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import axios from "axios";

function Users()  {
       const [users, setUsers] = useState([])

       useEffect(()=>{
        axios.get('https://server-tchy.onrender.com')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
       }, [])

       const handleDelete = (id) => {
        axios.delete('https://server-tchy.onrender.com/deleteUser/'+id)
        .then(res => {console.log(res) 
          window.location.reload()})
        .catch(err => console.log(err))
       }
  return (
    <div className='d-flex vh-100 bg-light justify-content-center align-items-center bg-dark'>
    <div className='w-75 bg-white rounded shadow-lg p-4'>
        <Link to="./create" className="btn btn-success mb-3">Add +</Link>
        <table className='table table-hover'>
            <thead className='thead-dark'>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>
                            <Link to={`/update/${user._id}`} className="btn btn-sm btn-outline-success me-2">Update</Link>
                            <button className='btn btn-sm btn-outline-danger'
                             onClick={(e) => handleDelete(user._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
  )
}

export default Users
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Update() {
    const [id, setId] = useState(null)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
        setPassword(localStorage.getItem('password'))
    }, [])
    const handleUpdate = (e)=>{
        e.preventDefault();
        axios.put(`https://656beaa9e1e03bfd572de5a5.mockapi.io/cruds/cruds-operation/${id}`,
        {
            Username: name,
            Email: email,
            Password: password,
          }
        )
        .then(()=>{
            navigate('/read')
        })
    }
  return (
    <>
      <h1 className="text-center fw-bold fs-1 mt-5">Update</h1>
      <form className="container col-md-6 ">
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            UserName
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="e.g Usama"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="abc@gmail.com"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            required
          />
        </div>

        <button
          type="submit"
          onClick={handleUpdate}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default Update
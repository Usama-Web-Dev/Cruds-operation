import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !password){
      alert('Please Fill all fields ');
    }
    // Send a POST request
    axios
      .post(
        "https://656beaa9e1e03bfd572de5a5.mockapi.io/cruds/cruds-operation",
        {
          Username: name,
          Email: email,
          Password: password,
        }
      )
      .then(() => {
        history("/read");
      });
  };

  return (
    <>
      <h1 className="text-center fw-bold fs-1 mt-5">Create</h1>
      <form className="container col-md-6 ">
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            UserName
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
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
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            required
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;

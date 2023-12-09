import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://656beaa9e1e03bfd572de5a5.mockapi.io/cruds/cruds-operation")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  // Handle Delete

  function handleDelete(id) {
    axios
      .delete(
        `https://656beaa9e1e03bfd572de5a5.mockapi.io/cruds/cruds-operation/${id}`
      )
      .then((res) => {
        console.log("Item deleted:", res.data);
        getData();
        // Update the local state to reflect the deletion
        // setData((prevData) => prevData.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  }

//   Handle Update
  const setDataLocalStorage = (id,name, email, password)=>{
    
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password)
  }

  // Use Effect
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container col-md-6">
      <h1 className="text-center mb-2 mt-5">Data</h1>
      <table className="table table-dark table-stripted">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Passwords</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{eachData.Username}</td>
              <td>{eachData.Email}</td>
              <td>{eachData.Password}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(eachData.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={"/update"}>
                  <button className="btn btn-success"
                  onClick={()=>{
                    setDataLocalStorage(eachData.id, eachData.Username, eachData.Email,eachData.Password)
                  }}
                  >Update</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Read;

import axios from "axios";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../components/useFetch";




const Users = () => {
  const { isLoading, serverError, apiData:users } = useFetch(`http://localhost:5000`)
  


  const handleDelete =(id)=>{
    axios.delete('http://localhost:5000/deleteUser/'+id)
    .then((res)=>{
      console.log(res)
      window.location.reload()
    })
    .catch((err)=> console.log(err))
  }
  return ( 
    <>
    { isLoading && <p> loading... </p>}
    { !isLoading && serverError ? <p> 404 Error </p>  
          :
      (<main className="d-flex vh-100  bg-primary justify-content-center align-items-center text-center px-3">
        <div className="w-[80vw] bg-white rounded p-3">
          <Link to="/create" className="btn btn-success">Add +</Link>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user)=>{
                return <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td className="grid grid-cols-2 gap-8 bg-gray-200">
                    <button className="btn btn-secondary">
                      <Link to={`/update/${user._id}`} >update</Link>
                    </button>
                    <button className="btn btn-danger" onClick={ ()=> handleDelete(user._id) } >
                      delete
                    </button>
                  </td>
                </tr>
              })}
            </tbody>
          </table>

        </div>
      </main>)
      }
    </>
   );
}
 
export default Users;
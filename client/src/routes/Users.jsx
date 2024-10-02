import { useState } from "react";
import { Link } from "react-router-dom";



const Users = () => {

  const [users, setUsers] = useState([
      {
        Name: "Alice Johnson",
        Email: "alice.johnson@example.com",
        Age: 28,
      },
      {
        Name: "Bob Smith",
        Email: "bob.smith@example.com",
        Age: 35,
      },
      {
        Name: "Charlie Davis",
        Email: "charlie.davis@example.com",
        Age: 22,
      },
      {
        Name: "Diana Evans",
        Email: "diana.evans@example.com",
        Age: 30,
      },
      {
        Name: "Evan Parker",
        Email: "evan.parker@example.com",
        Age: 40,
      }
    
  ])
  return ( 
    <main className="d-flex vh-100 bg-primary justify-content-center align-items-center text-center px-3">
      <div className="w-50 bg-white rounded p-3">
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
              return <tr key={user.Name}>
                <td>{user.Name}</td>
                <td>{user.Email}</td>
                <td>{user.Age}</td>
                <td>
                  <button className="btn btn-secondary">
                    <Link to="/update" >update</Link>
                  </button>
                  <button className="btn btn-danger">delete</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </main>
   );
}
 
export default Users;
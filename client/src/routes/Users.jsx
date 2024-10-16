import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Users = () => {

  const [users, setUsers] = useState([
      // {
      //   Name: "Alice Johnson",
      //   Email: "alice.johnson@example.com",
      //   Age: 28,
      // },
      // {
      //   Name: "Bob Smith",
      //   Email: "bob.smith@example.com",
      //   Age: 35,
      // },
      // {
      //   Name: "Charlie Davis",
      //   Email: "charlie.davis@example.com",
      //   Age: 22,
      // },
      // {
      //   Name: "Diana Evans",
      //   Email: "diana.evans@example.com",
      //   Age: 30,
      // },
      // {
      //   Name: "Evan Parker",
      //   Email: "evan.parker@example.com",
      //   Age: 40,
      // }
    
  ])

  const handleFetch =  ()=>{
    axios.get(`http://localhost:5000`)
    .then((res)=> {
      console.log(res.data)
      setUsers(res.data)
    })
  }

  useEffect(() => {
    handleFetch()
  }, [])


  const handleDelete =(id)=>{
    axios.delete('http://localhost:5000/deleteUser/'+id)
    .then((res)=>{
      console.log(res)
      window.location.reload()
    })
    .catch((err)=> console.log(err))
  }
  return ( 
    <main className="d-flex vh-100  bg-primary justify-content-center align-items-center text-center px-3">
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
    </main>
   );
}
 
export default Users;
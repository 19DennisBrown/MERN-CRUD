import { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Create = () => {
  const navigate = useNavigate()

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()

  const  handleSubmit =(e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/createUser", {name, email, age})
    .then(result => {
      console.log(result)
      navigate('/')
    })
    .catch((err) => console.log(err))
  }

  return ( 
    <div className="container mt-5">
      <h2 className="mb-4 text-center">User Information Form</h2>
      <form onSubmit={handleSubmit} >
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required
              onChange = {(e)=> setName(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required
              onChange = {(e)=> setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="age" className="col-sm-2 col-form-label">Age</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="age" placeholder="Enter your age" required
              onChange = {(e)=> setAge(e.target.value)}
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
   );
}
 
export default Create;
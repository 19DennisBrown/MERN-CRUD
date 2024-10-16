

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()

  const handleFetch=()=>{
    axios.get("http://localhost:5000/getUser/"+id)
    .then((res)=>{
      console.log(res.data)
      setName(res.data.name)
      setEmail(res.data.email)
      setAge(res.data.age)
    })
    .catch((err)=> console.log(err))
    
  }
  useEffect(() => {
    handleFetch()
  }, [])
  
  const handleUpdate =(e)=>{
    e.preventDefault()
    axios.put( "http://localhost:5000/updateUser/"+id, {name, email, age})
    .then( (res)=>{
      console.log(res)
      navigate('/')
    })
    .catch((err)=> console.log(err))
  }
  return ( 
    <div className="container mt-5">
    <h2 className="mb-4 text-center">User Information Form</h2>
    <form onSubmit={ handleUpdate }>
      <div className="row mb-3">
        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="name" placeholder="Enter your name" required
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id="email" placeholder="Enter your email" required
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
           />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="age" className="col-sm-2 col-form-label">Age</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="age" placeholder="Enter your age" required
            value={ age }
            onChange={ (e)=> setAge( e.target.value) }
          />
        </div>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary">Update</button>
      </div>
    </form>
  </div>
   );
}
 
export default Update;
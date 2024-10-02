


const Update = () => {
  return ( 
    <div className="container mt-5">
    <h2 className="mb-4 text-center">User Information Form</h2>
    <form>
      <div className="row mb-3">
        <label for="name" className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
        </div>
      </div>
      <div className="row mb-3">
        <label for="email" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
        </div>
      </div>
      <div className="row mb-3">
        <label for="age" className="col-sm-2 col-form-label">Age</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="age" placeholder="Enter your age" required />
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
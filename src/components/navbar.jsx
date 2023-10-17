import React, { useContext, useState } from 'react'
import AllUsers from "./allUsers";
import UserContext from '../context/user/UserContext';
// import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Navbar() {
  const context = useContext(UserContext);
  const { addUser } = context;
  const [user, setuser] = useState({ rank: "", name: "", email: "", phone: "", dob: "", gender: "", country: "" });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleshow = () => setShow(true);

  const handleOnClick = (e) => {
    e.preventDefault();
    // setShow(true);
    addUser(user.rank, user.name, user.email, user.phone, user.dob, user.gender, user.country);
    setuser({ rank: "", name: "", email: "", phone: "", dob: "", gender: "", country: "" })
    setShow(false);
  };

  const onChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div >
      <nav className="navbar heading">

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="add-user ">

              {/* // here is editing a note form   */}
              <form >
              <div className="mb-3">
                <label htmlFor="rank" className="form-label">
                  ID
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="rank"
                  name="rank"
                  value={user.rank}
                  onChange={onChange}
                  placeholder='Enter the ID no.'
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={user.name}
                  onChange={onChange}
                  placeholder='Enter Full Name'
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edescription" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={onChange}
                  value={user.email}
                  placeholder='Enter Email Address'
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  onChange={onChange}
                  value={user.phone}
                  placeholder='Enter mobile number'
                />
              </div>
              <div className="mb-3">
                <label htmlFor="dob" className="form-label">
                  Date Of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  name="dob"
                  onChange={onChange}
                  value={user.dob}
                  placeholder='Enter date of birth'
                />
              </div>

              <div className="mb-3">

                <label htmlFor="gender" className="form-label">
                  Gender
                </label>

                <Form.Select className="form-control" id="gender"
                  name="gender"
                  onChange={onChange}
                  value={user.gender} >
                  <option>Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="other">Other</option>
                </Form.Select>
              </div>


              <div className="mb-3">

                <label htmlFor="country" className="form-label">
                  Country
                </label>

                <Form.Select className="form-control"
                  id="country"
                  name="country"
                  onChange={onChange}
                  value={user.country}
                  placeholder='Select country' >
                  <option>Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="China">China</option>
                  <option value="Canda">Canda</option>
                  <option value="Russia">Russia</option>
                  <option value="Brazil">Brazil</option>
                </Form.Select>
              </div>

              </form>

            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="add-button" onClick={handleOnClick}  >
              Add Employee
            </button>
          </Modal.Footer>
        </Modal>
        <a className="navbar-brand ">Employee Management</a>
        <button className="add-button"
          onClick={handleshow}
      
        >Add Employee</button>

      </nav>
      <AllUsers />
    </div>
  )
}

export default Navbar
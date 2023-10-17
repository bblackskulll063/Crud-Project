import React from 'react'
import { Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function CreateModal() {
    const context = useContext(UserContext);
    const { users} = context;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleshow = () => setShow(true);

  return (
    <div className="">
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

                  <Form.Select  className="form-control" id="gender"
                    name="gender"
                    onChange={onChange}
                    value={user.gender} >
                    <option>Select gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Other</option>
                  </Form.Select>
                </div>
        

                <div className="mb-3">

                  <label htmlFor="country" className="form-label">
                    Country
                  </label>

                  <Form.Select  className="form-control"
                    id="country"
                    name="country"
                    onChange={onChange}
                    value={user.country}
                    placeholder='Select country' >
                    <option>Select Country</option>
                    <option value="1">India</option>
                    <option value="2">USA</option>
                    <option value="3">China</option>
                    <option value="4">Canda</option>
                    <option value="5">Russia</option>
                    <option value="6">Brazil</option>
                  </Form.Select>
                </div>
                </form>

            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="add-button"  onClick={handleOnClick}  >
              Add Employee
            </button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}

export default CreateModal
import React, { useContext, useEffect, useState } from 'react'
import UserDetail from './userDetail'
import UserContext from "../context/user/UserContext";
import { Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate} from 'react-router-dom';


function AllUsers() {
    const navigate = useNavigate();

    const context = useContext(UserContext);
    const { users, getUsers, editUser } = context;

    useEffect(() => {
        getUsers();
        // eslint-disable-next-line 
    }, []);

    const [user, setuser] = useState({ id: " ", name: "", email: "", phone: "", dob: "", gender: "", country: "" });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleshow = () => setShow(true);

    const updateUser = (currentUser) => {
        setShow(true);
        setuser({ id: currentUser._id, name: currentUser.name, email: currentUser.email, phone: currentUser.phone, dob: currentUser.dob, gender: currentUser.gender, country: currentUser.country });

    };

    const handleOnClick = (e) => {
        e.preventDefault();
        editUser(user.id, user.name, user.email, user.phone, user.dob, user.gender, user.country);
        setShow(false);
        navigate(0);
    };

    const onChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <div >
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="add-user ">

                        {/* // here is editing a note form   */}
                        <form>
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

                                />
                            </div>

                            <div className="mb-3">

                                <label htmlFor="gender" className="form-label">
                                    Gender
                                </label>
                                <Form.Select aria-label="gender"
                                    id='gender'
                                    name="gender"
                                    onChange={onChange}
                                    value={user.gender} >
                                    <option>Open this select menu</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
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
                                >
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
                        Edit Employee
                    </button>
                </Modal.Footer>
            </Modal>
            <div className='table-box '>
                <table className="table ">
                    <thead>
                        <tr >
                            <th scope="col">ID</th>
                            <th scope="col">Employee Name</th>
                            <th scope="col">Email Address</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col">Date Of Birth</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Country</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>

                        {users &&
                            users.map((employee) => {
                                return (
                                    <UserDetail key={employee._id}
                                        updateUser={updateUser}
                                        user={employee}
                                    />

                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUsers
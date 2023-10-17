import { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
  const host = "http://localhost:5000";
  const initialuser = [];

  const [users, setusers] = useState(initialuser);

  // fetch all notes;
  const getUsers = async () => {
    const url = `${host}/user/fetchalluser`;
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
      
    });
    const json = await response.json();
    setusers(json);
  };

  // Add note  const addnote = ();
  const addUser = async (rank, name, email, phone, dob, gender, country ) => {
    const url = `${host}/user/adduser`;
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({rank, name, email, phone, dob, gender, country}),
    });
    const userDetail = await response.json();
    setusers(users.concat(userDetail));
  };

  // edit note
  const editUser = async (id, name, email, phone, dob, gender, country) => {
    // call API
    const url = `${host}/user/updateuser/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, dob, gender, country }),
    });
    const json = await response.json();
    console.log(json);

    let newUser = JSON.parse(JSON.stringify(users));
    // logic for edit
    for (let i = 1; i < users.length; i++) {
      const element = users[i];
      if (id === element.id) {
        newUser[i].name = name;
        newUser[i].email = email;
        newUser[i].phone = phone;
        newUser[i].dob = dob;
        newUser[i].gender = gender;
        newUser[i].country = country;
        break;
      }
    }
    setusers(newUser);
  };

  // delete note
  const deleteUser = async (id) => {
    const url = `${host}/user/deleteuser/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);

    const newUser = users.filter((user) => {
      return user._id !== id;
    });
    setusers(newUser);
  };

  return (
    <UserContext.Provider
      value={{ users, getUsers , addUser, editUser, deleteUser}}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;

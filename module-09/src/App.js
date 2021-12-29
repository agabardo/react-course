import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([])
  
  const addUserHandler = (name, age) => {
    const newUser = {
      name: name,
      age: age,
      id: Math.ceil(Math.random() * 100000)
    }
    setUsersList((currentState) => { 
      return [...currentState, newUser];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const onAddUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
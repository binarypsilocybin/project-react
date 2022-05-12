import React, { useState } from "react";
import Loader from "../../components/Loader";
import "../../App.css";

export default function Development() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function handleLoadUsers() {
    setIsLoading(true);
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setUsers(data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <button onClick={handleLoadUsers} disabled={isLoading}>
        Load Users
      </button>
      <h1>Users</h1>
      {isLoading && <Loader />}
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.login}</li>)}
      </ul>
    </>
  );
}

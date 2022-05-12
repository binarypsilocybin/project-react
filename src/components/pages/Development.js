import React, { lazy, Suspense, useReducer, useState } from "react";
import Loader from "../../components/Loader";
const RiverInformation = lazy(() =>
  import(/* webpackChunkName: "RiverInformation" */ "../RiverInformation")
);

export default function Development() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [river, setRiver] = useState("nile");
  const [show, toggle] = useReducer((state) => !state, true);

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

  const renderUsers = (
    <ul>{users && users.map((user) => <li key={user.id}>{user.login}</li>)}</ul>
  );

  return (
    <>
      <button onClick={handleLoadUsers} disabled={isLoading}>
        Load Users
      </button>
      <h1>Users</h1>
      {isLoading ? <Loader /> : renderUsers}
      <h1>World's Longest Rivers</h1>
      <div>
        <button onClick={toggle}>Toggle Details</button>
      </div>
      <button onClick={() => setRiver("nile")}>Nile</button>
      <button onClick={() => setRiver("amazon")}>Amazon</button>
      <button onClick={() => setRiver("yangtze")}>Yangtze</button>
      <button onClick={() => setRiver("mississippi")}>Mississippi</button>
      <Suspense fallback={<div>Loading Component</div>}>
        {show && <RiverInformation name={river} />}
      </Suspense>
    </>
  );
}

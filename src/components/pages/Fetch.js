import React, { useState, useContext } from "react";
import StoreFront from "../onlineFetch/StoreFront";
import Navbar from "../onlineFetch/Navbar";
import { AppProvider, AppContext } from "../onlineFetch/AppContext";

function FetchProject() {
  const [loggedIn, setLoggedIn] = useState(false);
  const app = useContext(AppContext);

  if (loggedIn) {
    return (
      <>
        <div className={app.theme === "dark" ? "dark" : ""}>
          <Navbar />
          <StoreFront />
          <button
            className="btn btn-outline"
            onClick={() => setLoggedIn(false)}
          >
            Logout
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2>Please login</h2>
        <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>
          Login
        </button>
      </>
    );
  }
}

export default function AppWrapper() {
  return (
    <AppProvider>
      <FetchProject />
    </AppProvider>
  );
}

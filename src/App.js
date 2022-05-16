import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SeveralProjects from "./components/pages/SeveralProjects";
import AnotherProject from "./components/pages/AnotherProject";
import Marketing from "./components/pages/Marketing";
import Consulting from "./components/pages/Consulting";
import Promises from "./components/pages/Promises";
import Development from "./components/pages/Development";
import AppWrapper from "./components/pages/Fetch";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/several-projects" component={SeveralProjects} />
        <Route path="/project" component={Project} />
        <Route path="/another-project" component={AnotherProject} />
        <Route path="/marketing" component={Marketing} />
        <Route path="/consulting" component={Consulting} />
        <Route path="/promises" component={Promises} />
        <Route path="/development" component={Development} />
        <Route path="/fetch" component={AppWrapper} />
      </Switch>
    </Router>
  );
}

export default App;

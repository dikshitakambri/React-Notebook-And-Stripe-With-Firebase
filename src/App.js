import React from "react";
import NavbarComponent from "./components/Navbar";
import Form from "./components/Form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Form />
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

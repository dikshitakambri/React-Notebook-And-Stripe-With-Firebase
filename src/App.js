import React from "react";
import NavbarComponent from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Favorites from './components/notes/Favorites';
import NoteDetail from './components/notes/NoteDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path='/favorites' component={Favorites} ></Route>
          <Route path='/note/:id' component={NoteDetail} ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

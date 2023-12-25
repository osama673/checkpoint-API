import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import NavBar from "./components/NavBar";
import Users from "./components/Users";
import Posts from "./components/Posts";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <div className="container">
                <h1 className="header">Home Page</h1>
              </div>
            </Route>
            <Route path="/users" component={Users} />
            <Route path="/posts" component={Posts} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

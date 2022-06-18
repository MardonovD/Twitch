import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = () => {
  return <div>Home</div>;
};
const About = () => {
  return <div>About</div>;
};
const Login = () => {
  return <div>Login</div>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>About</li>
            <li>Login</li>
          </ul>
        </header>

        <div>
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/login" exact component={Login} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

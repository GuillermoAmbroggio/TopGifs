import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
require("dotenv").config();

function App() {
  return (
    <div>
      <Route path="/" component={Search} />
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;

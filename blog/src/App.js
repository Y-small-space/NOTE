import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Page from "./components/Page";
import Bar from "./components/Bar";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Page />
        <Bar />
      </Router>
    </div>
  );
}

export default App;

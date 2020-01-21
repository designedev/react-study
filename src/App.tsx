import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";

function App() {
  return (
    <div className="App">
      <MyComponent name="SAM" email="sam@mail.com"></MyComponent>
      <Counter></Counter>
      <Say></Say>
    </div>
  );
}

export default App;

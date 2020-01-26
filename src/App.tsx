import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import StatePropsTestComponent from "./StatePropsTestComponent";

function App() {
  return (
    <div className="App">
      <MyComponent name="SAM" email="sam@mail.com"></MyComponent>
      <Counter></Counter>
      <StatePropsTestComponent value={10}></StatePropsTestComponent>
    </div>
  );
}

export default App;

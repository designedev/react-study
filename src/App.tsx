import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import StatePropsTestComponent from "./components/StatePropsTestComponent";
import EventPracticeComponent from "./components/EventPracticeComponent";
import BetterEventPracticeComponent from "./components/BetterEventPracticeComponent";

function App() {
  return (
    <div className="App">
      <MyComponent name="SAM" email="sam@mail.com"></MyComponent>
      <Counter></Counter>
      <StatePropsTestComponent value={10}></StatePropsTestComponent>
      <EventPracticeComponent></EventPracticeComponent>
      <BetterEventPracticeComponent/>
    </div>
  );
}

export default App;

import React, { Component } from "react";

type CounterState = {
  number: number;
  fixedNumber?: number;
};

type CounterProps = {};

class Counter extends Component<CounterProps, CounterState> {
  //   constructor(props: CounterProps) {
  //     super(props);
  //     this.state = {
  //       number: 0
  //     };
  //   }
  state: CounterState = {
    number: 0,
    fixedNumber: 20
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h3>changable : {number}</h3>
        <h3>fixed : {fixedNumber}</h3>
        <button
          onClick={() => {
            this.setState(
              prevState => {
                return { number: prevState.number + 1 };
              },
              () => {
                console.log("plus clicked..");
              }
            );
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({ number: number - 1 }, () => {
              console.log("minus clicked..");
            });
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default Counter;

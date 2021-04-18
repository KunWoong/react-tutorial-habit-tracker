import React, { Component, useState } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <>
        <span>{this.state.count}</span>
        <button
          onClick={() => {
            this.setState((state) => ({
              count: state.count + 1,
            }));
          }}
        >
          click
        </button>
      </>
    );
  }
}

export default Counter;
// const Counter = (props) => {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };
//   return (
//     <>
//       <span>{count}</span>
//       <button onClick={handleIncrement}>click</button>
//     </>
//   );
// };

// export default Counter;

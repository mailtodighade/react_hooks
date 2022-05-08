import React from "react";

class Counter1 extends React.Component {
  state = { counter: 0 };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <div className="ui grid">
          <div className="ui row">
            <div className="four wide column">
              <button
                onClick={() => {
                  this.setState({ counter: this.state.counter + 1 });
                }}
              >
                INCREMENT
              </button>
            </div>
            <div className="four wide column">
              <button
                onClick={() => {
                  this.setState({ counter: 0 });
                }}
              >
                RESET
              </button>
            </div>
            <div className="four wide column">
              <button
                onClick={() => {
                  this.setState({ counter: this.state.counter - 1 });
                }}
              >
                DECREMENT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter1;

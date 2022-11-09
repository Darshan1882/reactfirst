import React from "react";

const Counter = (props) => {
    const formatCount = () => {
    if (props.counter.value === 0) {
      return "Zero";
    } else {
      return props.counter.value;
    }
  };

  return (
    <div>
      <span>{formatCount()}</span>
      <button onClick={() => props.onIncrement(props.counter)}>
        Increment
      </button>
      <button onClick={() =>props.onDecrimant(props.counter)}>Decrimant</button>
      <button onClick={() => props.onDelete(props.counter.id)}>Remove</button>
    </div>
  );
};

export default Counter;

import Counter from "./counter";


const Counters = ({onAdd,onReset,onDelete,onIncrement,onDecrimant,counters}) => {

  return (
    <div>
      <button onClick={onReset}>Reset</button>
      <button onClick={onAdd}>Add</button> 
      {counters.map((counter) => ( 
        <Counter
          key={counter.id}
          onDelete={onDelete}
          onIncrement ={onIncrement}
          onDecrimant ={onDecrimant}
          counter={counter}
        />
      ))}
    </div>
  );
}

export default Counters;

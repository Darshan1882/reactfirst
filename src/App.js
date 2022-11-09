import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import { useState, useEffect } from "react";
import Axios from "axios";

const App = () => {
  const [counters, setCounters] = useState([]);
  useEffect(() => {
    Axios.get("https://633eb5ab0dbc3309f3bb64fb.mockapi.io/counter/")
      .then((result) => {
        setCounters(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handelincrement = (counter) => {
    const newcounter = counters.map((a) => {
      if (a.id === counter.id) {
        return { ...a, value: counter.value + 1  };
      } else {
        return a;
      }
    });
    setCounters(newcounter);

    
    Axios
      .put(
        "https://633eb5ab0dbc3309f3bb64fb.mockapi.io/counter/"+ counter.id,({
        value :counter.value +1
     }));
  };

  const handldicrimant = (counter) => {
    const newcounter = counters.map((a) => {
      if (a.id === counter.id) {
        if (counter.value >= 1) {
          return { ...a, value: counter.value - 1 };
        } else {
          return a;
        }
      } else {
        return a;
      }
    });
    setCounters(newcounter);

    Axios
    .put(
      "https://633eb5ab0dbc3309f3bb64fb.mockapi.io/counter/"+ counter.id,({
      value :counter.value -1
   }));
  };

  function handleDelete(counterId) {
    const Counters = counters.filter((c) => c.id !== counterId);
    setCounters(Counters);
    Axios.delete("https://633eb5ab0dbc3309f3bb64fb.mockapi.io/counter/"+counterId)
  }


  
  const handleReset = (counter) => {
    const Counters = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(Counters);
   counters.map(obj => (
       
      Axios
      .put(
        "https://633eb5ab0dbc3309f3bb64fb.mockapi.io/counter/" + obj.id ,({
        value:0
        }))
  ))};

  const handleAdd = (counter) => {
    const newcounter = [...counters, { id: counters.length + 1, value: 0 }];
    setCounters(newcounter);
   
    Axios.post("https://633eb5ab0dbc3309f3bb64fb.mockapi.io/counter/",({
        id:counter.id,
        value : 0
    }))

  };

  return (
    <div>
      <NavBar totalCounters={ counters.filter((c) => c.value > 0).length} />
      <main className="container">
        <Counters
          counters={counters}
          onIncrement={handelincrement}
          onDecrimant={handldicrimant}
          onDelete={handleDelete}
          onReset={handleReset}
          onAdd={handleAdd}
        />
      </main>
    </div>
  );
};

export default App;

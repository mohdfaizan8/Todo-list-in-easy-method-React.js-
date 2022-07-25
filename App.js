import React, { useEffect, useState } from "react";
import "./index.css";

const App = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const submit = () => {
    if (!input) {
      alert("Please fill the Data for submit.");
    } else {
      setItems([...items, input]);
      setInput("");
    }
  };
  const del = (id) => {
    const update = items.filter((curElm, index) => {
      return index !== id;
    });
    setItems(update);
  };

  return (
    <>
      <div className="todo">
        <div className="inner">
          <h2>Remember yours thigs to do.</h2>
          <p>All the important things goes in these list.</p>
          <br />
          <input
            type="text"
            className="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <br />
          <br />
          <button type="submit" className="sub" onClick={submit}>
            Submit
          </button>
          <hr />
          <br />
          <div className="things">
            {items.map((curElm, index) => {
              return (
                <>
                  <h4>{curElm}</h4>
                  <button type="delete" onClick={() => del(index)} key={index}>
                    Delete
                  </button>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

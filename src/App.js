import "./App.css";
import React from "react";
import { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";

function App() {
  const [data, setData] = useState(["Wakeup"]);
  const [input, setInput] = useState("");
  function change(e) {
    setInput(e.target.value);
  }
  console.log(data.length);
  function display(e) {
    console.log(data);
    setData([...data, input]);
    e.preventDefault();
  }
  function del(value) {
    const arr = data.filter(val => val !== value)
    setData(arr)
  }
  return (
    <div className="BgImage">
      <div className="App">
        <div>
          <h1>TODO LIST</h1>
          <br />
          <br />
            <div className="Align">
            <Form>
            <input
              type="text"
              value={input}
              placeholder="Add Item"
              onChange={(e) => change(e)}
            ></input>{" "}
            <Button
              onClick={(e) => {
                display(e);
              }}
              variant="secondary"
            >
              Add to List
            </Button>{" "}
            <br />
            <br />
            {data.map((items, i) => (
              <div key={i}>
                <h5>
                  {items}{" "}
                  <Button
                    onClick={()=>del(items)
                    }
                    variant="danger"
                  >
                    Delete
                  </Button>{" "}
                </h5>

                <br />
              </div>
            ))}
          </Form>
            </div>
          
        </div>
      </div>
    </div>
  );
}
export default App;

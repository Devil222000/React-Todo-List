import "./App.css";
import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function App() {
  const[data,setData] = useState(["Wakeup"]);
  const [input, setInput] = useState("");
  function change(e) {
    setInput(e.target.value);
  
  }
  function display(e) {
    console.log(data);
    setData([... data,input])
    e.preventDefault();
  }
  return (
    <div className="BgImage">
      <div className="App">
        <h1>TODO LIST</h1>
        <br />
        <br />
        <Form>
          <input
            type="text"
            value={input}
            placeholder="Add Item"
            onChange={(e) => change(e)}
          ></input>
          <Button
            onClick={(e) => {
              display(e);
            }}
            variant="secondary"
          >
            Add to List
          </Button>{" "}
          {data.map((items, i) => (
            <div key={i}>
              <h5>
                <Form.Check type="radio" label={items}></Form.Check>
              </h5>
              <br />
            </div>
          ))}
        </Form>
      </div>
    </div>
  );
}
export default App;

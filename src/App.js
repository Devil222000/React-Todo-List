import './App.css';
import React from "react";
import {useState} from 'react'
import {Button,Form } from 'react-bootstrap';
let data =["Wakeup" , "Breakfast" ,"Study", "Valorant","Lunch" ,"TP", "Tea", "Study" ,"Valorant"];
function App()
{ 
 
  const[input,setInput]=useState("");
  const[check,setCheck]=useState(false)
  function change(e)
  { 
    setInput(e.target.value);
    console.log(data)
    
  }
  function display(e)
  { setCheck(true);
    e.preventDefault();
    data.push(input)
    
  }
  return(
<div className="BgImage" >
    <div className="App">
   <h1>TODO LIST</h1>
   <br/><br/>
   <Form>
       {
         data.map((items,i)=>
         <div key={i}> 
           <h5><Form.Check type="radio" label ={items} ></Form.Check></h5>
           <br/>
         </div>  
       )
       }
       
       <input type="text" value={input} placeholder="Add Item" onChange={(e)=>change(e)}></input>
       <Button  onClick={(e)=>{display(e)}} variant="secondary" >Add to List</Button>{' '}
       <br/>
       <br/>
       
       <Button  type="submit" variant="secondary" >Submit</Button>{' '}
   </Form>
    </div>
</div>
  )
}



export default App;
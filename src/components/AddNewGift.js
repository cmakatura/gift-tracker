import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import '../App.css';

function AddNewGift() {
  const history = useHistory()

  const [username, setUsername] = useState('');
  const [recipient, setRecipient] = useState('');
  const [gift, setGift] = useState('');
  const [price, setPrice] = useState('');
  const [hidingSpot, setHidingSpot] = useState('');

  const handleSubmit = (e) => {
    
    e.preventDefault();
    fetch("http://localhost:5000/gifts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username, recipient, gift, price, hidingSpot
       
      }
      ),
    })
.then(res => res.json())
.then(data => console.log(data))

history.push("/mygifts");

  }

return(
  <div className="form-box" align="center">
    <h2>Add a New Gift</h2>
    <form onSubmit={handleSubmit}>

    
      <input 
      className="form-input"
      type="text" 
      required
      placeholder="Unique User ID (important to remember)"
      value={username}
      onChange = {(e) => setUsername(e.target.value)}
      />

    
      <input 
      className="form-input"
      type="text" 
      required
      placeholder="Recipient Name"
      value={recipient}
      onChange = {(e) => setRecipient(e.target.value)}
      />

      
      <input 
      className="form-input"
      type="text" 
      required
      placeholder="Gift"
      value={gift}
      onChange = {(e) => setGift(e.target.value)}
      />

      
      <input 
      className="form-input"
      type="text" 
      required
      placeholder="Price"
      value={price}
      onChange = {(e) => setPrice(e.target.value)}
      />

      
      <input 
      className="form-input"
      type="text" 
      
      placeholder="Hiding Spot"
      value={hidingSpot}
      onChange = {(e) => setHidingSpot(e.target.value)}
      />

      <input type="submit" className="submitBtn" value="Submit" />

    </form>
  </div>
  )
}

export default AddNewGift;

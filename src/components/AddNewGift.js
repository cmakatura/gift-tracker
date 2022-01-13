import React from "react";
import { useState } from "react";

function AddNewGift() {
  const [username, setUsername] = useState('');
  const [recipient, setRecipient] = useState('');
  const [gift, setGift] = useState('');
  const [price, setPrice] = useState('');
  const [hidingSpot, setHidingSpot] = useState('');

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const card = { username, recipient, gift, price, hidingSpot};
    fetch("http://localhost:3000/gifts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({card}
      ),
    })
.then(res => res.json())
.then(data => console.log(data))
  }

return(
  <div>
    <h2>Add a New Gift</h2>
    <form onSubmit={handleSubmit}>

    <label>Unique User ID:</label>
      <input 
      type="text" 
      required
      value={username}
      onChange = {(e) => setUsername(e.target.value)}
      />

      <label>Recipient Name:</label>
      <input 
      type="text" 
      required
      value={recipient}
      onChange = {(e) => setRecipient(e.target.value)}
      />

      <label>Gift:</label>
      <input 
      type="text" 
      required
      value={gift}
      onChange = {(e) => setGift(e.target.value)}
      />

      <label>Price:</label>
      <input 
      type="text" 
      required
      value={price}
      onChange = {(e) => setPrice(e.target.value)}
      />

      <label>Hiding Spot:</label>
      <input 
      type="text" 
      required
      value={hidingSpot}
      onChange = {(e) => setHidingSpot(e.target.value)}
      />

      <input type="submit" value="Submit" />

    </form>
  </div>
  )
}

export default AddNewGift;


/*
"username": "bob21",
"recipient": "Ted",
"gift": "Bear",
"price": "$150",
"hidingSpot": "Closet"
*/
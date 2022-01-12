import React from "react";
import { useState } from "react";

function AddNewGift() {
  const [reciever, setReciever] = useState('');
  const [gift, setGift] = useState('');
  const [price, setPrice] = useState('');
  const [hidingSpot, setHidingSpot] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const card = { reciever, gift, price, hidingSpot};

    console.log(card);
  }

return(
  <div>
    <h2>Add a New Gift</h2>
    <form onSubmit={handleSubmit}>

      <label>Reciever Name:</label>
      <input 
      type="text" 
      required
      value={reciever}
      onChange = {(e) => setReciever(e.target.value)}
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




import React, {useState, useEffect} from 'react';


function MyGifts() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch("http://localhost:5000/gifts"
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="gift-container" align="center">
     {
       data.map((item)=>

       <div className="gift" key={item.id}>
         
            <h3>For: {item.recipient}</h3>
            
            <h5>Gift: {item.gift}</h5>
            <h5>Price: ${item.price}</h5> 
            <h5>Hiding Spot: {item.hidingSpot}</h5> 
           
        </div> 
       )
     }
    </div>
  );
}
    



export default MyGifts;

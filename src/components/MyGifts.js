
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
    <div>
     {
       data.map((item)=>

       <div className='giftcard' key={item.id}>
            <h3 className="ui header">For: {item.recipient}</h3>
            <h5 className="ui header">Gift: {item.gift}</h5>
            <h5 className="ui header">Price: ${item.price}</h5> 
            <h5 className="ui header">Hiding Spot: {item.hidingSpot}</h5> 
           
        </div> 
       



       
       )
     }
    </div>
  );
}
    



export default MyGifts;

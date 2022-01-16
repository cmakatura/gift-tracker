
import React, {useState, useEffect} from 'react';




function MyGifts() {


  const [filter, setFilter] = useState("");










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
      .then(response => response.json())
      .then(json => setData(json))
  }


  useEffect(()=>{
    getData()
  },[])

//console.log(filter)



const results = data.filter((item) =>
item.username.toLowerCase().includes(filter.toLowerCase())
);

  return (
<div>





      <p className="filter" align="center">
        Type to filter the list by your username: 
        <input id="filter"
          name="filter"
          type="text"
          value={filter}
          onChange={event => setFilter(event.target.value)}
        />
      </p>
      
     







    <div className="gift-container" align="center">
     {
       results.map((item)=>

       <div className="gift" key={item.id}>
         
            <h3>For: {item.recipient}</h3>
        
            <h5>Gift: {item.gift}</h5>
            <h5>Price: ${item.price}</h5> 
            <h5>Hiding Spot: {item.hidingSpot}</h5> 
           
        </div> 
       )
     }
    </div>
  </div>
  );
}
    



export default MyGifts;

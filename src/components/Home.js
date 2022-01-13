import React from "react";

const Home = async () => {
  let uri = 'http://localhost:3000/gifts'
  
  const res = await fetch(uri);
  const gifts = await res.json();
  console.log(gifts)

}

export default Home;
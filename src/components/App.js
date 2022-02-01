
import { Route, Switch } from "react-router-dom";
//import 'semantic-ui-css/semantic.min.css';


import MyGifts from "./MyGifts";
import AddNewGift from "./AddNewGift";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  return (
    
    <div>
      <NavBar />
       <Switch>
         <Route exact path="/home">
            <Home />
         </Route>
       </Switch>

       <Switch>
         <Route exact path="/mygifts">
            <MyGifts />
         </Route>
       </Switch>

       <Switch>
         <Route exact path="/addnewgift">
            <AddNewGift />
         </Route>
       </Switch>


    
    </div>
  );
}

export default App;

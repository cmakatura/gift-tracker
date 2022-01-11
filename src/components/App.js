
import { Route, Switch } from "react-router-dom";


import MyGifts from "./MyGifts";
import SignUp from "./SignUp";
import AddNewGift from "./AddNewGift";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <div>
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

       <Switch>
         <Route exact path="/login">
            <Login />
         </Route>
       </Switch>

       <Switch>
         <Route exact path="/signup">
            <SignUp />
         </Route>
       </Switch>
    </div>
  );
}

export default App;

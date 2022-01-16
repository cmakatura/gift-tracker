import { Link } from "react-router-dom";

function NavBar() {
  
  return (
    
    <nav className="navbar">
      
    
      <div>
      <h1>The Gift Tracker</h1>
        <Link to="/home" className="nav">Home</Link>

        <Link to="/mygifts" className="nav">Gifts</Link>

        <Link to="/addnewgift" className="nav">Add A New Gift</Link>

        

        

      </div>
    </nav>
    
  );
}
 
export default NavBar;
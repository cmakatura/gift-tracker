import { Link } from "react-router-dom";

function NavBar() {
  
  return (
    <nav className="navbar">
      <h1>The Gift Tracker</h1>
      <div className="links">
        <Link to="/home" style={{ 
          color: 'white', 
          backgroundColor: "green",
          borderRadius: '8px'
          }}>Home</Link>

        <Link to="/mygifts"style={{ 
          color: 'white', 
          backgroundColor: "green",
          borderRadius: '8px'
          }}>Gifts</Link>

        <Link to="/addnewgift" style={{ 
          color: 'white', 
          backgroundColor: "green",
          borderRadius: '8px'
        }}>Add A New Gift</Link>

        

        

      </div>
    </nav>
  );
}
 
export default NavBar;
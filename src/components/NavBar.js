import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function NavBar({ onLogout }) {
  const history = useHistory()

  

  function handleClick() {
  
    // logout the user
    onLogout();
    // then navigate them to the login page
    history.push("/login");
  }

  return (
    <nav className="navbar">
      <h1>The Gift Tracker</h1>
      <div className="links">
        <Link to="/" style={{ 
          color: 'white', 
          backgroundColor: "green",
          borderRadius: '8px'
          }}>Home</Link>

        <Link to="/mygifts"style={{ 
          color: 'white', 
          backgroundColor: "green",
          borderRadius: '8px'
          }}>Gifts</Link>

        <Link to="/addnewgift">Add A New Gift</Link>

        

        <button onClick={handleClick}>Logout</button>

      </div>
    </nav>
  );
}
 
export default NavBar;
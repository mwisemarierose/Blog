import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <nav className="navbar" >
      <h1 style={{color:'black'}}>Rose Blog</h1>
      
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: 'purple',
          borderRadius: '8px' 
        }}>New Blog</Link>
        {/* <Link to="/blank">Blank</Link> */}
        {/* <Link to="/login" style={{ 
          color: 'white', 
          backgroundColor: 'purple',
          borderRadius: '8px' 
        }}>Log In</Link> */}
      </div>
    
      
    </nav>
  );
      }
 
export default Navbar;
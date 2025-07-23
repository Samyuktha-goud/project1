import React,{useState} from 'react';
import { Link ,NavLink} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuopen,setMenuOpen] = useState(false);
  return (
   
      <nav style={{ padding: '15px', backgroundColor: '#1B3C53' ,border:'2px solid black'}}>
        <img
          src="https://maassqube.com/wp-content/uploads/2020/03/MaassQube_logo_Final.png"
          alt="MaassQube Logo" className="logo"  />
        <Link>
        <div className='menu' onClick={() => {
          setMenuOpen(!menuopen);
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div >
        <ul className={menuopen ? "open":""}>  
          <li><NavLink to="/" >Home</NavLink></li>
          <li><NavLink to="/contact" >Contact</NavLink></li>
          <li><NavLink to="/about" >About Us</NavLink></li>
          <li><NavLink to="/products" >Products</NavLink></li>
        
        </ul> 
        </Link>
        
      </nav>
    
        
   
  );
}

export default Navbar;

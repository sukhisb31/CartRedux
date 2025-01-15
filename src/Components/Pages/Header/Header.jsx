import { NavLink } from "react-router-dom";
import images from "../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="container">
        <div className="navbar bg-primary ">

            {/*------------- Logo ---------------*/}
          <div className="logo">
            <NavLink to="/">
              <img src={images} alt="logo-image" className="logo-img" />
            </NavLink>
            
          </div>

          {/*-------------- Header ---------------*/}
          <ul className="nav_bar" >
              <NavLink to="/" style={{color:"white", textDecoration:"none", alignItems:"center"}}>Home</NavLink>
              <NavLink to="/contact" style={{color:"white", textDecoration:"none"}}> Contact</NavLink>
              <NavLink to="/about" style={{color:"white", textDecoration:"none"}}>About</NavLink>
            </ul>
            <ul className="cart-nav">

                {/*--------- Cart-Icon ---------*/}
                <NavLink to={"/cart"} className="right">
          <button type="button" className="btn btn-primary position-relative">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </NavLink>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

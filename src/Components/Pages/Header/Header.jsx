import { NavLink } from "react-router-dom";
import images from "../images/logo.png";
import "./Header.css";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../Redux/cartSlice";
const Header = () => {
  const cartItem = useSelector(selectCartCount)
  return (
    <>
      <div className="container-fluid">
        <div className="nav_bar bg-primary sticky-top align-items-center">

            {/*------------- Logo ---------------*/}
          <div className="logo">
            <NavLink to="/">
              <img src={images} alt="logo-image" className="logo-img" />
            </NavLink>
            
          </div>

          {/*-------------- Header ---------------*/}
          <ul className="navbar">
              <NavLink to="/" style={{color:"white", textDecoration:"none", fontSize:"larger", fontWeight:"600" }}>Home</NavLink>
              <NavLink to="/contact" style={{color:"white", fontSize:"larger", fontWeight:"600" , textDecoration:"none"}}> Contact</NavLink>
              <NavLink to="/about" style={{color:"white", fontSize:"larger", fontWeight:"600" , textDecoration:"none"}}>About</NavLink>
            </ul>
            <ul className="cart-nav">

                {/*--------- Cart-Icon ---------*/}
                <NavLink to={"/cart"} className="right">
          <button type="button" className="btn btn-primary position-relative">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartItem}
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

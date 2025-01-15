

import { useSelector } from "react-redux";
import { selectCartItems } from "../Redux/cartSlice";



const Cart = () => {
  
  const cartItem = useSelector(selectCartItems);
  console.log(cartItem);
  return (
    <>

      

        {cartItem.map((item) => (
          <div key={item.id} className="container my-5">
            <div
              className="card mb-3 bg-dark text-light text-center"
              style={{ width: "650px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <div className="p-3">
                    <img
                      src={item.image}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.name}</p>
                    <button className="btn btn-primary mx-3">
                      {item.price} ₹
                    </button>
                    <button className="btn btn-warning">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        
      
    </>
  );
};

export default Cart;

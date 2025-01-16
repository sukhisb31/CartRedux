import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  clearCart,
  decrementItem,
  incrementItem,
  selectCartTotal,
} from "../Redux/cartSlice";
import "./Cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItems);
  console.log(cartItem);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <>
      <div className="container">
        {cartItem.map((item) => (
          <div key={item.id} className="container my-5">
            <div
              className="card mb-3 bg-dark text-light text-center"
              style={{ width: "500px" }}
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

                    {/* Increment Decrement button */}
                    <button
                      className="btn btn-light mx-3 "
                      onClick={() => dispatch(decrementItem(item))}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className="btn btn-light mx-3 "
                      onClick={() => dispatch(incrementItem(item))}
                    >
                      +
                    </button>
                    <br />
                    <br />
                    <button className="btn btn-primary mx-3">
                      {item.price} ₹
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <h2
          className="total"
          style={{
            textAlign: "center",
            border: "2px solid lightgray",
            width: "40%",
          }}
        >
          {" "}
          Total Price of all Items : {cartTotal}
        </h2>
        {/* Clear Button */}
        <div className="clear">
          <button
            className="btn btn-warning m-4"
            style={{ justifyContent: "center" }}
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear Cart
          </button>
          <button className="btn btn-warning">Buy Now</button>
        </div>
      </div>
    </>
  );
};
export default Cart;

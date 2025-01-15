import { useDispatch, useSelector } from "react-redux";
import { Products } from "../../../data";
import {addToCart, selectCartItems} from "../../Redux/cartSlice"

const Home = () => {
  const dispatch = useDispatch()
  const cartItem = useSelector(selectCartItems)
  console.log(cartItem)

  const handleAddToCart = (item)=>{
    dispatch(addToCart(item))
    };
  return (
    <div>
      <div className="container">
        <div className="row">
          {Products.map((item) => (
            <div key={item.id} className="container col-md-4 my-5">
              <div className="card bg-dark" style={{ width: "18rem" }}>
                <div className="p-3 d-flex justify-content-center align-items-center">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt="card-image"
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="card-body text-light text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <button className="btn btn-primary mx-3">
                    {item.price} ₹
                  </button>
                  <button className="btn btn-warning" onClick={()=>handleAddToCart(item)}>Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

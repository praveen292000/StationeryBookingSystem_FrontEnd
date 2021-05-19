import { useDispatch, useSelector } from "react-redux";
import {
  productToCartIncreaseThunk,
  productToCartReduceThunk,
} from "../../redux/Cart/productToCart/productToCartAction";
import { addBookingThunk } from "../../redux/bookingDetail/addBookingDetail/addBookingAction";
import DisplayBookingDetail from "../bookingDetail/DisplayBookingDetail";
import "./productToCart.css";
const AddOrRemoveProductFromCart = () => {
  const dispatch = useDispatch();

  const response = useSelector((state) => {
    return {
      products: state.productToCart.products,
      booking: state.addBooking.bookingDetail,
      error: state.addBooking.error,
      customerId:state.viewAllCustomer.customer,
    };
  });

  const onHandlePlace = (e) => {
    e.preventDefault();
    const customerId = response.customerId;
    dispatch(addBookingThunk(customerId));
  };
  const onHandleReduce = (product_Id) => {
    const data = {
      product_Id: product_Id,
      customerId: response.customerId,
      product_Quantity: 1,
    };
    dispatch(productToCartReduceThunk(data));
  };
  const onHandleIncrease = (product_Id) => {
    const data = {
      product_Id: product_Id,
      customerId: response.customerId,
      product_Quantity: 1,
    };
    dispatch(productToCartIncreaseThunk(data));
  };
  return (
    <div className="cartProduct">
      <h2 className="title border-bottom">Cart</h2>
      {response.products.map((product) => (
        <div key={product.product_Id} className="productCart">
          <h5>{product.product_Name}</h5>
          <div className="symbol" onClick={() => onHandleReduce(product.product_Id)}>
            -
          </div>
          <span className="value">{product.product_Quantity}</span>
          <div className="symbol" onClick={() => onHandleIncrease(product.product_Id)}>
            +
          </div>
        </div>
      ))}
      <button type="submit" className="btn btn-primary" onClick={onHandlePlace}>
        Place Booking
      </button>
      {response.booking ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Display Booking</h4>
          <DisplayBookingDetail booking={response.booking} />
        </div>
      ) : (
        ""
      )}
      {response.error ? (
        <div className="alert alert-danger mt-3" role="alert">
          {response.error}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddOrRemoveProductFromCart;

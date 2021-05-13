import { useDispatch, useSelector } from "react-redux";
import {
  productToCartIncreaseThunk,
  productToCartReduceThunk,
} from "../../redux/Cart/productToCart/productToCartAction";
import { addOrderThunk } from "../../redux/orderDetail/addOrderDetail/addOrderAction";
import DisplayOrderDetail from "../orderDetail/DisplayOrderDetail";
import "./productToCart.css";
const AddOrRemoveProductFromCart = () => {
  const dispatch = useDispatch();

  const response = useSelector((state) => {
    return {
      products: state.productToCart.products,
      order: state.addOrder.orderDetail,
      error: state.addOrder.error,
      customerId:state.viewAllCustomer.customer,
    };
  });

  const onHandlePlace = (e) => {
    e.preventDefault();
    const customerId = response.customerId;
    dispatch(addOrderThunk(customerId));
  };
  const onHandleReduce = (itemId) => {
    const data = {
      productId: productId,
      customerId: response.customerId,
      quantity: 1,
    };
    dispatch(productToCartReduceThunk(data));
  };
  const onHandleIncrease = (productId) => {
    const data = {
      productId: productId,
      customerId: response.customerId,
      quantity: 1,
    };
    dispatch(productToCartIncreaseThunk(data));
  };
  return (
    <div className="cartProduct">
      <h2 className="title border-bottom">Cart</h2>
      {response.products.map((product) => (
        <div key={product.productId} className="productCart">
          <h5>{product.productName}</h5>
          <div className="symbol" onClick={() => onHandleReduce(product.productId)}>
            -
          </div>
          <span className="value">{product.quantity}</span>
          <div className="symbol" onClick={() => onHandleIncrease(product.productId)}>
            +
          </div>
        </div>
      ))}
      <button type="submit" className="btn btn-primary" onClick={onHandlePlace}>
        Place Order
      </button>
      {response.order ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Display Order</h4>
          <DisplayBOOKING order={response.order} />
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
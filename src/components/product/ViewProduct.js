import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewAllProductThunk } from "../../redux/product/viewAllProduct/viewAllProductAction";
import { viewProductThunk } from "../../redux/product/viewProduct/viewProductAction";
import DisplayProductDetail from "./DisplayProductDetail";

const ViewProduct = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      product: state.viewProduct.product,
      productList: state.viewAllProduct.products,
      error: state.viewProduct.error,
    };
  });
  const [state, setState] = useState({ product_Id: "" });

  const fetchAll = () => {
    dispatch(viewAllProductThunk());
  };
  useEffect(fetchAll, []);

  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(viewProductThunk(state));
  };
  return (
    <div className="container-sm">
      <h1> View Product</h1>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label> Product Id</label>
          <select
            name="product_Id"
            className="form-control"
            onChange={onHandleChange}
          >
            <option disabled selected>
              Select Product Id
            </option>
            {response.productList.map((product) => (
              <option key={product.product_Id} value={product.product_Id}>
                {/* {product.productName} */}
                {product.product_Id}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {response.product ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Display Product</h4>
          <DisplayProductDetail product={response.product} />
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
export default ViewProduct;

import { useState } from "react";
import DisplayListProductDetail from "./DisplayListProductDetail";
import { useDispatch, useSelector } from "react-redux";
import { viewProductByNameThunk } from "../../redux/product/viewProductByName/viewProductByNameAction";

const ViewProductbyName = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      product: state.viewProductByName.product,
      error: state.viewProductByName.error,
    };
  });
  const [state, setState] = useState({ productName: "" });

  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(viewProductByNameThunk(state));
  };
  return (
    <div className="container-sm">
      <h1>View Product By Name</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label> Product Name</label>
          <input
            type="text"
            name="productName"
            className="form-control"
            onChange={onHandleChange}
            minLength="2"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {response.product ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Display Product By Name</h4>
          <DisplayListProductDetail productList={response.product} />
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

export default ViewProductbyName;

  
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductThunk } from "../../Redux/Product/addProduct/addProductAction";
import DisplayProductDetail from "./DisplayProductDetail";

const AddProduct = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      product: state.addProduct.product,
      error: state.addProduct.error,
    };
  });

  const [state, setState] = useState({
    productName: "",
    cost: "",
    quantity: "",
    validations: { productName: undefined, cost: undefined },
  });
  const fetchAll = () => {  
    };
  useEffect(fetchAll, []);

  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    let validationMsg;
    if (name === "productName") {
      validationMsg = validateProductName(value);
    }
    if (name === "cost") {
      validationMsg = validateCost(value);
    }
    const newValidations = { ...state.validations, [name]: validationMsg };
    setState({ ...state, [name]: value, validations: newValidations });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addProductThunk(state));
    if (state.validations.productName) {
      return;
    }
  };
  const validateProductName = (name) => {
    if (name.length < 3) {
      return "Product Name can not be Smaller than 3 Letters";
    }
    return undefined;
  };
  const validateCost = (cost) => {
    if (cost < 0) {
      return "Cost can not be Negative";
    }
    return undefined;
  };

  return (
    <div className="container-sm">
      <form onSubmit={onSubmit}>
        <h1>Add Products</h1>

        <div className="form-group">
          <label> Product Name</label>
          <input
            type="text"
            className="form-control"
            name="productName"
            onChange={onHandleChange}
          />
          {state.validations.productName ? (
            <div>{state.validations.productName}</div>
          ) : (
            ""
          )}
        </div>

        <div className="form-group">
          <label> Cost</label>
          <input
            type="number"
            name="cost"
            className="form-control"
            onChange={onHandleChange}
          />
          {state.validations.cost ? <div>{state.validations.cost}</div> : ""}
        </div>

        <div className="form-group">
          <label> Quantity</label>
          <input
            type="number"
            className="form-control"
            name="quantity"
            onChange={onHandleChange}
            min="0"
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            {" "}
            Submit
          </button>
        </div>
      </form>
      {response.item ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Display Added Product</h4>
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

export default AddProduct;
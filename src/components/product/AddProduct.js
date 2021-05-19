import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductThunk } from "../../redux/product/addProduct/addProductAction";
import DisplayProductDetail from "./DisplayProductDetail";
import { viewAllStoreInchargeThunk } from "../../redux/StoreIncharge/viewAllStoreIncharge/viewAllStoreInchargeAction";

const AddProduct = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      product: state.addProduct.product,
      storeInchargeList: state.viewAllStoreIncharge.storeIncharges,
      error: state.addProduct.error,
    };
  });

  const [state, setState] = useState({
    product_Name: "",
    product_Price: "",
    product_Quantity: "",
    storeInchargeId: "",
   
    validations: { product_Name: undefined, product_Price: undefined },
  });
  const fetchAll = () => {
    dispatch(viewAllStoreInchargeThunk());
  
  };
  useEffect(fetchAll, []);

  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    let validationMsg;
    if (name === "product_Name") {
      validationMsg = validateProductName(value);
    }
    if (name === "product_Price") {
      validationMsg = validateCost(value);
    }
    const newValidations = { ...state.validations, [name]: validationMsg };
    setState({ ...state, [name]: value, validations: newValidations });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addProductThunk(state));
    if (state.validations.product_Name) {
      return;
    }
  };
  const validateProductName = (name) => {
    if (name.length < 3) {
      return "Product Name can not be Smaller than 3 Letters";
    }
    return undefined;
  };
  const validateCost = (product_Price) => {
    if (product_Price < 0) {
      return "Cost can not be Negative";
    }
    return undefined;
  };

  return (
    <div className="container-sm">
      <form onSubmit={onSubmit}>
        <h1>Add Product</h1>

        <div className="form-group">
          <label> Product Name</label>
          <input
            type="text"
            className="form-control"
            name="product_Name"
            onChange={onHandleChange}
          />
          {state.validations.product_Name ? (
            <div>{state.validations.product_Name}</div>
          ) : (
            ""
          )}
        </div>

        <div className="form-group">
          <label> Cost</label>
          <input
            type="number"
            name="product_Price"
            className="form-control"
            onChange={onHandleChange}
          />
          {state.validations.product_Price ? <div>{state.validations.product_Price}</div> : ""}
        </div>

        <div className="form-group">
          <label> Quantity</label>
          <input
            type="number"
            className="form-control"
            name="product_Quantity"
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
      {response.product ? (
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

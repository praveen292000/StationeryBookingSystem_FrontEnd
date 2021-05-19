import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomerThunk } from "../../redux/customer/updateCustomer/updateCustomerAction";
import DisplayCustomerDetails from "./DisplayCustomerDetail";

const UpdateCustomerDetail = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      customer: state.updateCustomer.customer,
      customerId:state.viewAllCustomer.customer,
      error: state.updateCustomer.error
    };
  });

  const [state, setState] = useState({ firstName: "", lastName: "", age: "" });

  const onHandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const data = { ...state, id:response.customerId };
    dispatch(updateCustomerThunk(data));
  };
  return (
    <div className="container-sm">
      <h2>Update Customer Request</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>firstName</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>lastName</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="text"
            className="form-control"
            name="age"
            onChange={onHandleChange}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      {response.customer ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Display updated Customer</h4>
          <DisplayCustomerDetails customer={response.customer} />
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

export default UpdateCustomerDetail;

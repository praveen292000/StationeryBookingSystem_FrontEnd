import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerThunk } from "../../redux/customer/addCustomer/addCustomerAction";
import DisplayCustomerDetails from "./DisplayCustomerDetail";

const AddCustomerDetail = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      customer: state.addCustomer.customer,
      error: state.addCustomer.error,
    };
  });

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    age: "",
    mobileNumber: "",
    email: "",
    buildingName: "",
    area: "",
    gender: "",
    pincode: "",
    validations: { firstName: undefined, age: undefined },
  });

  const onHandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let validationMsg;
    if (name === "firstName") {
      validationMsg = validateName(value);
    }
    if (name === "age") {
      validationMsg = validateAge(value);
    }
    const newValidations = { ...state.validations, [name]: validationMsg };
    setState({ ...state, [name]: value, validations: newValidations });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCustomerThunk(state));
    if (state.validations.fistName || state.validations.age) {
      return;
    }
  };
  const validateAge = (age) => {
    if (age <= 0) {
      return "Age cannot be zero or negative";
    }

    if (age > 120) {
      return "Age cannot be greater than 120";
    }

    return undefined;
  };
  const validateName = (name) => {
    if (name.length <= 2) {
      return "name should be of length greater than 2";
    }
    return undefined;
  };

  return (
    <div className="container-sm">
      <h2>Add Customer Request</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>firstName</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            onChange={onHandleChange}
          />
          {state.validations.firstName ? (
            <div>{state.validations.firstName}</div>
          ) : (
            ""
          )}
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
            type="number"
            className="form-control"
            name="age"
            onChange={onHandleChange}
          />
          {state.validations.age ? <div>{state.validations.age}</div> : ""}
        </div>
        <div className="form-group">
          <label>mobileNumber</label>
          <input
            type="tel"
            className="form-control"
            name="mobileNumber"
            minLength="10"
            maxLength="10"
            pattern="[0-9]+"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            required
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <input
            type="text"
            className="form-control"
            name="gender"
            required
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            className="form-control"
            name="pincode"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>Area</label>
          <input
            type="text"
            className="form-control"
            name="area"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>BuildingName</label>
          <input
            type="text"
            className="form-control"
            name="buildingName"
            onChange={onHandleChange}
          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>

      {response.customer ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Display Added Customer</h4>
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

export default AddCustomerDetail;

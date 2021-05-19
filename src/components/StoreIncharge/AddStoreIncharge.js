import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStoreInchargeThunk } from "../../redux/StoreIncharge/addStoreIncharge/addStoreInchargeAction";
import DisplayStoreIncharge from "./DisplayStoreIncharge";

const AddStoreIncharge = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      storeIncharge: state.addStoreIncharge.storeIncharge,
      error: state.addStoreIncharge.error,
    };
  });
  const [state, setState] = useState({
    storeInchargeName: "",
    managerName: "",
    contactNumber: "",
    buildingName: "",
    area: "",
    streetNo: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    validations: { pincode: undefined, storeInchargeName: undefined },
  });
  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    let validationMsg;
    if (name === "storeInchargeName") {
      validationMsg = validatestoreInchargeName(value);
    }
    if (name === "pincode") {
      validationMsg = validateStoreInchargePincode(value);
    }
    const newValidations = { ...state.validations, [name]: validationMsg };
    setState({ ...state, [name]: value, validations: newValidations });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStoreInchargeThunk(state));
    if (state.validations.storeInchargeName || state.validations.pincode) {
      return;
    }
  };
  const validatestoreInchargeName = (name) => {
    if (name.length < 5) {
      return "length of StoreIncharge name cannot be less than 5";
    }
    return undefined;
  };
  const validateStoreInchargePincode = (pincode) => {
    if (pincode.length !== 6) {
      return "length of pincode should be 6 digit";
    }
    return undefined;
  };
  return (
    <div className="container-sm">
      <h2>Add StoreIncharge</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>StoreInchargeName</label>
          <input
            type="text"
            name="storeInchargeName"
            className="form-control"
            onChange={onHandleChange}
          />
          {state.validations.storeInchargeName ? (
            <div>{state.validations.storeInchargeName}</div>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <label>Store Name</label>
          <input
            type="text"
            name="managerName"
            className="form-control"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>ContactNumber</label>
          <input
            type="number"
            name="contactNumber"
            className="form-control"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>BuildingName</label>
          <input
            type="text"
            name="buildingName"
            className="form-control"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>Area</label>
          <input
            type="text"
            name="area"
            className="form-control"
            required
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>StreetNo</label>
          <input
            type="text"
            name="streetNo"
            className="form-control"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            className="form-control"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            className="form-control"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            className="form-control"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            name="pincode"
            className="form-control"
            required
            onChange={onHandleChange}
          />
          {state.validations.pincode ? (
            <div>{state.validations.pincode}</div>
          ) : (
            ""
          )}
        </div>
        <button className="btn btn-primary">Submit</button>
        <br />
      </form>
      {response.storeIncharge ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Added Stationery-Shop Details</h4>
          <DisplayStoreIncharge storeIncharge={response.storeIncharge} />
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

export default AddStoreIncharge;

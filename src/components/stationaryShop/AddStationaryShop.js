import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStationaryShopThunk } from "../../redux/stationaryshop/addStationaryShop/addStationaryShopAction";
import DisplayStationaryShop from "./DisplayStationaryShop";

const AddStationaryShop = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      stationaryShop: state.addStationaryShop.stationaryShop,
      error: state.addStationaryShop.error,
    };
  });
  const [state, setState] = useState({
    stationaryShopName: "",
    managerName: "",
    contactNumber: "",
    buildingName: "",
    area: "",
    streetNo: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    validations: { pincode: undefined, stationaryShopName: undefined },
  });
  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    let validationMsg;
    if (name === "stationaryShopName") {
      validationMsg = validateStationaryShopName(value);
    }
    if (name === "pincode") {
      validationMsg = validateStationaryShopPincode(value);
    }
    const newValidations = { ...state.validations, [name]: validationMsg };
    setState({ ...state, [name]: value, validations: newValidations });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStationaryShopThunk(state));
    if (state.validations.stationaryShopName || state.validations.pincode) {
      return;
    }
  };
  const validateStationaryShopName = (name) => {
    if (name.length < 5) {
      return "length of stationaryShop name cannot be less than 5";
    }
    return undefined;
  };
  const validateStationaryShopPincode = (pincode) => {
    if (pincode.length !== 6) {
      return "length of pincode should be 6 digit";
    }
    return undefined;
  };
  return (
    <div className="container-sm">
      <h2>Add StationaryShop</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>StationaryShopName</label>
          <input
            type="text"
            name="stationaryShopName"
            className="form-control"
            onChange={onHandleChange}
          />
          {state.validations.stationaryShopName ? (
            <div>{state.validations.stationaryShopName}</div>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <label>ManagerName</label>
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
      {response.stationaryShop ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Added StationaryShop Details</h4>
          <DisplayStationaryShop stationaryShop={response.stationaryShop} />
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

export default AddStationaryShop;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewStoreInchargeThunk } from "../../redux/StoreIncharge/viewStoreIncharge/viewStoreInchargeAction";
//import { viewStoreInchargeService } from "../../services/storeInchargeService";
import DisplayStoreIncharge from "./DisplayStoreIncharge";

const ViewStoreIncharge = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      storeIncharge: state.viewStoreIncharge.storeIncharge,
      storeInchargeId:state.viewStoreIncharge.storeInchargeId,
      error: state.viewStoreIncharge.error,
    };
  });
  const fetchStoreIncharge = () => {
    dispatch(viewStoreInchargeThunk(response.storeInchargeId));
  };
  useEffect(fetchStoreIncharge, []);
  return (
    <div className="container-sm">
      {response.storeIncharge ? (
        <div storeIncharge="container p-3 my-3 bg-dark text-white">
          <h4>Display StoreIncharge</h4>
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




/* import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewStoreInchargeByLocationThunk } from "../../redux/StoreIncharge/viewStoreInchargeByLocation/viewStoreInchargeByLocationAction";
import DisplayStoreInchargeList from "./DisplayStoreInchargeList";
const ViewByLocationStoreIncharge = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      storeIncharge: state.viewStoreInchargeByLocation.storeIncharge,
      error: state.viewStoreInchargeByLocation.error,
    };
  });
  const [state, setState] = useState({
    pincode: "",
    validations: { pincode: undefined },
  });

  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    let validationMsg;
    if (name === "pincode") {
      validationMsg = validateStoreInchargePincode(value);
    }
    const newValidations = { ...state.validations, [name]: validationMsg };
    setState({ ...state, [name]: value, validations: newValidations });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(viewStoreInchargeByLocationThunk(state));
    if (state.validations.pincode) {
      return;
    }
    setState({ ...state });
  };
  const validateStoreInchargePincode = (pincode) => {
    if (pincode.length !== 6) {
      return "length of pincode should be 6 digit";
    }
    return undefined;
  };
  return (
    <div className="container-sm">
      <h2>View StoreIncharge By Location</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>Pincode</label>
          <input
            className="form-control"
            type="text"
            name="pincode"
            onChange={onHandleChange}
          />
          {state.validations.pincode ? (
            <div>{state.validations.pincode}</div>
          ) : (
            ""
          )}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      {response.storeIncharge ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Displaying List of StoreIncharge</h4>
          <DisplayStoreInchargeList storeInchargeList={response.storeIncharge} />
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

export default ViewByLocationStoreIncharge;
*/
export default ViewStoreIncharge;
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewAllStoreInchargeThunk } from "../../redux/StoreIncharge/viewAllStoreIncharge/viewAllStoreInchargeAction";
import { viewStoreInchargeByIdThunk } from "../../redux/StoreIncharge/viewStoreInchargeById/viewStoreInchargeByIdAction";


import DisplayStoreIncharge from "./DisplayStoreIncharge";

const ViewStoreInchargeById = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      storeIncharge: state.viewStoreInchargeById.storeIncharge,
      storeInchargeList: state.viewAllStoreIncharge.storeIncharges,
      error: state.viewStoreInchargeById.error,
    };
  });

  const [state, setState] = useState({
    storeInchargeId: "",
  });
  const fetchAllStoreIncharge = () => {
    dispatch(viewAllStoreInchargeThunk());
  };
  useEffect(fetchAllStoreIncharge, []);
  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(viewStoreInchargeByIdThunk(state));
  };
  return (
    <div className="container-sm">
      <h2>View By StoreIncharge Id</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>StoreIncharge By Id</label>
          <select
            name="storeInchargeId"
            onChange={onHandleChange}
            className="form-control"
          >
            <option disabled selected>
              select storeInchargeId
            </option>
            {response.storeInchargeList.map((storeIncharge) => (
              <option
                key={storeIncharge.storeInchargeId}
                value={storeIncharge.storeInchargeId}
              >
                {storeIncharge.storeInchargeName}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary">Submit</button>
        <br />
      </form>
      {response.storeIncharge ? (
        /* <div className="container p-3 my-3 bg-dark text-white">
          <h4>Displaying StoreIncharge</h4>
          <DisplayStoreIncharge storeIncharge={response.storeIncharge} />
        </div> */
        
        <div className="alert alert-primary mt-3" role="alert">
          <p>Store In Charge login Successfully</p>
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

export default ViewStoreInchargeById;

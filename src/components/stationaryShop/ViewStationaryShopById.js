import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewAllStationaryShopThunk } from "../../redux/stationaryshop/viewAllStationaryShops/viewAllStationaryShopAction";
import { viewStationaryShopByIdThunk } from "../../redux/stationaryshop/viewStationaryShopById/viewStationaryShopByIdAction";
import DisplayStationaryShop from "./DisplayStationaryShop";

const ViewStationaryShopById = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      stationaryShop: state.viewStationaryShopById.stationaryShop,
      stationaryShopList: state.viewAllStationaryShop.stationaryShops,
      error: state.viewStationaryShopById.error,
    };
  });

  const [state, setState] = useState({
    stationaryShopId: "",
  });
  const fetchAllStationaryShop = () => {
    dispatch(viewAllStationaryShopThunk());
  };
  useEffect(fetchAllStationaryShop, []);
  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(viewStationaryShopByIdThunk(state));
  };
  return (
    <div className="container-sm">
      <h2>View By StationaryShop Id</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>StationaryShop By Id</label>
          <select
            name="stationaryShopId"
            onChange={onHandleChange}
            className="form-control"
          >
            <option disabled selected>
              select stationaryShopId
            </option>
            {response.stationaryShopList.map((stationaryShop) => (
              <option
                key={stationaryShop.stationaryShopId}
                value={stationaryShop.stationaryShopId}
              >
                {stationaryShop.stationaryShopName}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary">Submit</button>
        <br />
      </form>
      {response.stationaryShop ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Displaying StationaryShop</h4>
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

export default ViewStationaryShopById;

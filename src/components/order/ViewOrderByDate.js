import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewOrderByDateThunk } from "../../redux/order/viewOrderByDate/viewOrderByDateAction";
import DisplayOrderList from "./DisplayOrderList";

const ViewOrderByDate = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      order: state.viewOrderByDate.order,
      error: state.vieworderByDate.error,
    };
  });

  const [state, setState] = useState({
    startDate: "",
    endDate: "",
  });

  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(viewOrderByDateThunk(state));
  };

  return (
    <div className="container-sm">
      <h2> View Order By Date</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>StartDate</label>
          <input
            className="form-control"
            type="date"
            name="startDate"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>EndDate</label>
          <input
            className="form-control"
            type="date"
            name="endDate"
            onChange={onHandleChange}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      {response.order ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Displaying Order List</h4>
          <DisplayOrderList orderList={response.order} />
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

export default ViewOrderByDate;
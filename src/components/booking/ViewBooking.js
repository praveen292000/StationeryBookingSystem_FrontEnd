import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayBooking from "./DisplayBooking";
import { viewOrderThunk } from "../../redux/booking/viewBooking/viewBookingAction";

const ViewBooking = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      order: state.viewOrder.Booking,
      orderList: state.viewBookingByCustomer.Bookings,
      error: state.viewOrder.error,
    };
  });
  const [state, setState] = useState({
    orderId: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(viewOrderThunk(state));
  };
  return (
    <div className="container-sm">
      <h2>View Order Detail</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>Order Id</label>
          <select
            className="form-control"
            name="orderId"
            onChange={onHandleChange}
          >
            <option disabled selected>
              select order
            </option>
            {response.orderList.map((order, index) => (
              <option key={order.orderId} value={order.orderId}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      {response.order ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Display Order</h4>
          <DisplayBooking order={response.order} />
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

export default ViewBooking;
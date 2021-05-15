import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrderThunk } from "../../redux/booking/updateBooking/updateBookingAction";
import DisplayBooking from "./DisplayBooking";

const UpdateBooking = () => {
  const dispatch = useDispatch();

  const response = useSelector((state) => {
    return {
      order: state.updateOrder.Booking,
      orderList: state.viewBookingByCustomer.Bookings,
      error: state.updateOrder.error,
    };
  });

  const [state, setState] = useState({
    orderStatus: "",
    orderId: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateOrderThunk(state));
  };
  return (
    <div className="container-sm">
      <h2>Update Order Request</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>Order Id</label>
          <select
            className="form-control"
            name="orderId"
            onChange={onHandleChange}
          >
            <option disabled selected>
              select orderId
            </option>
            {response.orderList.map((order, index) => (
              <option key={order.orderId} value={order.orderId}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Status</label>
          <select
            className="form-control"
            name="orderStatus"
            onChange={onHandleChange}
          >
            <option disabled selected>
              {" "}
              select Status{" "}
            </option>
            <option value="arriving"> Arriving </option>
            <option value="delivered"> Delivered </option>
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      {response.order ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Display Updated Order</h4>
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

export default UpdateBooking;
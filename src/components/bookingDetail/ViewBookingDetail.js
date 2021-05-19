import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayBookingDetail from "./DisplayBookingDetail";
import { viewBookingThunk } from "../../redux/bookingDetail/viewBookingDetail/viewBookingAction";

const ViewBookingDetail = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      booking: state.viewBooking.bookingDetail,
      bookingList: state.viewBookingByCustomer.bookingDetails,
      error: state.viewBooking.error,
    };
  });
  const [state, setState] = useState({
    bookingId: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(viewBookingThunk(state));
  };
  return (
    <div className="container-sm">
      <h2>View Booking Detail</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>Booking Id</label>
          <select
            className="form-control"
            name="bookingId"
            onChange={onHandleChange}
          >
            <option disabled selected>
              select booking
            </option>
            {response.bookingList.map((booking, index) => (
              <option key={booking.bookingId} value={booking.bookingId}>
                {booking.bookingId}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      {response.booking ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Display Booking</h4>
          <DisplayBookingDetail booking={response.booking} />
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

export default ViewBookingDetail;
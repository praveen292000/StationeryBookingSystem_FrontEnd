import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBookingThunk } from "../../redux/bookingDetail/updateBookingDetail/updateBookingAction";
import DisplayBookingDetail from "./DisplayBookingDetail";

const UpdateBookingDetail = () => {
  const dispatch = useDispatch();

  const response = useSelector((state) => {
    return {
     booking: state.updateBooking.bookingDetail,
      bookingList: state.viewBookingByCustomer.bookingDetails,
      error: state.updateBooking.error,
    };
  });

  const [state, setState] = useState({
    bookingStatus: "",
    bookingId: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBookingThunk(state));
  };
  return (
    <div className="container-sm">
      <h2>Update Booking Request</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>Booking Id</label>
          <select
            className="form-control"
            name="bookingId"
            onChange={onHandleChange}
          >
            <option disabled selected>
              select bookingId
            </option>
            {response.bookingList.map((booking, index) => (
              <option key={booking.bookingId} value={booking.bookingId}>
                {booking.bookingId}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Status</label>
          <select
            className="form-control"
            name="bookingStatus"
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
      {response.booking ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Display Updated Booking</h4>
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

export default UpdateBookingDetail;

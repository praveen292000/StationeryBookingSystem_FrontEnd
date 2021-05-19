import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewBookingByCustomerThunk } from "../../redux/bookingDetail/viewBookingByCustomer/viewBookingByCustomerAction";
import DisplayListBookingDetail from "./DisplayListBookingDetail";
const ViewBookingDetailByCustomer = () => {
  const dispatch = useDispatch();

  const response = useSelector((state) => {
    return {
      bookingList: state.viewBookingByCustomer.bookingDetails,
      error: state.viewBookingByCustomer.error,
      customerId:state.viewAllCustomer.customer,
    };
  });

  const fetchAllBookingByCustomerId = () => {
    const customerId =response.customerId;
    dispatch(viewBookingByCustomerThunk(customerId));
  };

  useEffect(fetchAllBookingByCustomerId, []);

  return (
    <div className="container-sm">
      <h2>View Booking Detail By Customer Name</h2>
      {response.bookingList ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Display All Bookings</h4>
          <DisplayListBookingDetail bookingList={response.bookingList} />
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

export default ViewBookingDetailByCustomer;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewBookingByCustomerThunk } from "../../redux/booking/viewBookingByCustomer/viewBookingByCustomerAction";
import DisplayListBooking from "./DisplayListBooking";
const ViewBookingByCustomer = () => {
  const dispatch = useDispatch();

  const response = useSelector((state) => {
    return {
      orderList: state.viewBookingByCustomer.Bookings,
      error: state.viewBookingByCustomer.error,
      customerId:state.viewAllCustomer.customer,
    };
  });

  const fetchAllOrderByCustomerId = () => {
    const customerId =response.customerId;
    dispatch(viewBookingByCustomerThunk(customerId));
  };

  useEffect(fetchAllOrderByCustomerId, []);

  return (
    <div className="container-sm">
      <h2>View Order Detail By Customer Name</h2>
      {response.orderList ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Display All Orders</h4>
          <DisplayListBooking orderList={response.orderList} />
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

export default ViewBookingByCustomer;
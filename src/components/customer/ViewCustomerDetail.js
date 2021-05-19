import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewCustomerThunk } from "../../redux/customer/viewCustomer/viewCustomerAction";
import DisplayCustomerDetails from "./DisplayCustomerDetail";

const ViewCustomerDetail = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      customer: state.viewCustomer.customer,
      customerId:state.viewAllCustomer.customer,
      error: state.viewCustomer.error,
    };
  });
  const fetchCustomer = () => {
    dispatch(viewCustomerThunk(response.customerId));
  };
  useEffect(fetchCustomer, []);
  return (
    <div className="container-sm">
      {response.customer ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Display Customer</h4>
          <DisplayCustomerDetails customer={response.customer} />
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

export default ViewCustomerDetail;

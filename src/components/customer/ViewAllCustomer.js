import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  customer_login,
  viewAllCustomerThunk,
} from "../../redux/customer/viewAllCustomer/viewAllCustomerAction";

const ViewAllCustomer = () => {
  const [state, setState] = useState({ customerId: undefined });
  const dispatch = useDispatch();

  const response = useSelector((state) => {
    return {
      customerList: state.viewAllCustomer.customers,
      customer: state.viewAllCustomer.customer,
    };
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(customer_login(state.customerId));
  };

  const fetchAllCustomer = () => {
    dispatch(viewAllCustomerThunk());
  };

  useEffect(fetchAllCustomer, []);

  return (
    <div className="container-sm">
      <h2>Add Customer Request</h2>
      <form>
        <div className="form-group">
          <label>Select Customer</label>
          <select
            className="form-control"
            name="customerId"
            onChange={onHandleChange}
          >
            <option disabled selected>
              select-customers
            </option>
            {response.customerList.map((customer) => (
              <option key={customer.customerId} value={customer.customerId}>
                {customer.firstName}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary" onClick={(e) => onHandleSubmit(e)}>
          Submit
        </button>
      </form>
      {response.customer ? (
        <div className="alert alert-primary mt-3" role="alert">
          <p>Customer login Successfully</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ViewAllCustomer;

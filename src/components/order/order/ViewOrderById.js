import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { viewAllOrderThunk } from "../../redux/order/ViewAllOrder/viewAllOrderAction";

import { viewOrderByIdThunk } from "../../redux/order/viewOrderById/viewOrderByIdAction";
import DisplayOrder from "./DisplayOrder";

const ViewOrderById = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      order: state.viewOrderById.order,
      customerId:state.viewAllCustomer.customer,
      error: state.viewOrderById.error,
      orderList:state.viewAllOrder.orders
    };
  });

  const [state, setState] = useState({
    orderId: "",
  });

  const fetchAllOrder=()=>{
    dispatch(viewAllOrderThunk(response.customerId))
  }

  useEffect(fetchAllOrder,[]);

  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(viewOrderByIdThunk(state));
  };

  return (
    <div className="container-sm">
      <h2>View By Order Id</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>Order By Id</label>
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

        <button className="btn btn-primary">Submit</button>
        <br />
      </form>
      {response.order ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Displaying Order</h4>
          <DisplayOrder order={response.order} />
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

export default ViewOrderById;
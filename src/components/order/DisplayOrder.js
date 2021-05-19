const DisplayOrder = ({order}) => {
    return ( 
        <div className="container-sm p-3">     
              <p>OrderId : {order.orderId}</p>
              <p>Order Status : {order.orderStatus}</p>
              <p>Total Product : {order.totalProducts}</p>
              <p>Total Cost : {order.totalCost}</p>
              <p>Date : {order.orderDate}</p>
        </div>
     );
} 
export default DisplayOrder;
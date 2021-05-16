import axios from 'axios';
const baseUrl = "http://localhost:8587";


export function viewOrderByIdRequest(orderId){
    console.log("-----------Inside View Order By Id Request----------")
    const url=baseUrl+`/orders/get/${orderId}`;
    const promise=axios.get(url);
    return promise;
}
 export function viewOrderByDateRequest(startDate, endDate){
     console.log("-----------Inside View Order By Date Request----------")
     const url=baseUrl+`/orders/getByDate/${startDate}/${endDate}`;
     const promise=axios.get(url);
     return promise;
}

export function viewAllOrderRequest(customerId){
    const url=baseUrl+`/orders/viewbycustomer/${customerId}`;
     const promise=axios.get(url);
     return promise;

}
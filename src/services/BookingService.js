import axios from 'axios';
const baseUrl = "http://localhost:8585";


export function addOrderRequest(id){
    console.log("--------  Inside Add Order Request  --------- ")
    const url=baseUrl+`/orders/add`;
    const data={
        customerId:id
    }
    const promise=axios.post(url,data);
    return promise;  
}

export function updateOrderRequest(data) {
    console.log("--------  Inside update Order Request  --------- ")
    let url=baseUrl+"/orders/update";
    const promise=axios.put(url,data);
    return promise;
}

export function viewOrderByIdRequest(id){
    console.log("--------  Inside View Order by Id Request  --------- ")
    let url=baseUrl+`/orders/view/${id}`;
    const promise=axios.get(url);
    return promise;
}

export function viewBookingByCustomerIdRequest(id){
    console.log("--------  Inside View Order by CustomerId Request  --------- ");
    let url=baseUrl+`/orders/viewbycustomerid/${id}`;
    const promise=axios.get(url);
    return promise;

}
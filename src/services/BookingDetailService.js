import axios from 'axios';
const baseUrl = "http://localhost:8587";


export function addBookingRequest(id){
    console.log("--------  Inside Add Booking Request  --------- ")
    const url=baseUrl+`/bookings/add`;
    const data={
        customerId:id
    }
    const promise=axios.post(url,data);
    return promise;  
}

export function updateBookingRequest(data) {
    console.log("--------  Inside update Booking Request  --------- ")
    let url=baseUrl+"/bookings/update";
    const promise=axios.put(url,data);
    return promise;
}

export function viewBookingByIdRequest(id){
    console.log("--------  Inside View Booking by Id Request  --------- ")
    let url=baseUrl+`/bookings/view/${id}`;
    const promise=axios.get(url);
    return promise;
}

export function viewBookingByCustomerIdRequest(id){
    console.log("--------  Inside View Booking by CustomerId Request  --------- ");
    let url=baseUrl+`/bookings/viewbycustomerid/${id}`;
    const promise=axios.get(url);
    return promise;

}

const DisplayCustomerDetails = ({customer}) => {
    return ( 
        <div className="container-sm p-3">
            <p>Customer Id : {customer.customerId}</p>
            <p>FirstName : {customer.firstName}</p>
            <p>LastName : {customer.lastName}</p>
            <p>Gender : {customer.gender}</p>
        </div>
     );
}
 
export default DisplayCustomerDetails;

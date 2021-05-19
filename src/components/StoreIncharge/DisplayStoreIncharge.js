const DisplayStoreIncharge = ({storeIncharge}) => {
    return ( 
        <div className="container-sm p-3"> 
              <p>StoreInchargeId : {storeIncharge.storeInchargeId}</p>
              <p>StoreInchargeName : {storeIncharge.storeInchargeName}</p>
              <p>Manager Name : {storeIncharge.managerName}</p>
              <p>Contact Number : {storeIncharge.contactNumber}</p>
        </div>
     );
}
 
export default DisplayStoreIncharge;
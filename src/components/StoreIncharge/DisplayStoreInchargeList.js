import DisplayStoreIncharge from "./DisplayStoreIncharge";

const DisplayStoreInchargeList = ({storeInchargeList}) => {
    return ( 
        <div >
            {
                storeInchargeList.map((storeIncharge)=> <div key={storeIncharge.storeInchargeId}> <DisplayStoreIncharge storeIncharge={storeIncharge}/></div>)
            }
        </div>
     );
}
 
export default DisplayStoreInchargeList;
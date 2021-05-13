const DisplayCart = ({cart}) => {
    return ( 
        <div className="container">
            <h4>Displaying Cart</h4>
            <p>{cart.customerId}</p>
            <p>{cart.firstName}</p>
            <h6>Products</h6>
            {cart.products.map((product)=>
                <p key={product.productId}>{product.productName}</p>
            )}

        </div>
     );
}
 
export default DisplayCart;
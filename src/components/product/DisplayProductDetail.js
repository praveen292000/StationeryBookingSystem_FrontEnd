const DisplayProductDetail = ({ product }) => {
  return (
    <div className="container-sm p-3">
      <p>Product ID : {product.product_Id}</p>
      <p>Product Name : {product.product_Name}</p>
      <p>Product Quantity : {product.product_Quantity}</p>
      <p>Product Cost : {product.product_Price}</p>
       </div>
  );
};

export default DisplayProductDetail;

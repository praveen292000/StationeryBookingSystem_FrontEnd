const DisplayProductDetail = ({ product }) => {
  return (
    <div className="container-sm p-3">
      <p>Product ID : {product.productId}</p>
      <p>Product Name : {product.productName}</p>
      <p>Product Quantity : {product.quantity}</p>
      <p>Product Cost : {product.cost}</p>
    </div>
  );
};

export default DisplayProductDetail;
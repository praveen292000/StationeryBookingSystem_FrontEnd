import { productToCartConstant } from "./productToCartConstant";

const initial_State = {
  productDetail: undefined,
  products: [],
  error: undefined,
};

export const productToCartReducer = (state = initial_State, action) => {
  switch (action.type) {
    case productToCartConstant.Start:
      return {
        ...state,
      };
    case productToCartConstant.Success:
      return {
        ...state,
        productDetail: action.payload,
        products: addProductsToCart(state.products, action.payload),
        error: action.error,
      };
    case productToCartConstant.Failure:
      return {
        ...state,
        productDetail: action.payload,
        error: action.error,
      };
    case productToCartConstant.Start_Reduce:
      return {
        ...state,
      };
    case productToCartConstant.Success_Reduce:
      return {
        ...state,
        productDetail: action.payload,
        products: removeProductsFromCart(state.products, action.payload),
        error: action.error,
      };
    case productToCartConstant.Failure_Reduce:
      return {
        ...state,
        productDetail: action.payload,
        error: action.error,
      };
    case productToCartConstant.Empty_Cart:
      return {
        ...state,
        productDetail: action.payload,
        error: action.error,
        products: [],
      };
    default:
      return state;
  }
};

const addProductsToCart = (products, producttoAdd) => {
  const existingproduct = products.find((product) => product.product_Id === producttoAdd.product_Id);
  if (existingproduct) {
    return products.map((product) =>
      product.product_Id === producttoAdd.product_Id
        ? { ...product, /* product_Quantity */ product_Quantity: producttoAdd.product_Quantity/* product_Quantity */ }
        : product
    );
  }
  return [...products, producttoAdd];
};

export const removeProductsFromCart = (products, producttoremove) => {
  const existingproduct = products.find(
    (product) => product.product_Id === producttoremove.product_Id
  );
   if (existingproduct.product_Quantity === 1) {
    return products.filter((product) => product.product_Id !== producttoremove.product_Id);
  }
  return products.map((product) =>
    product.product_Id === producttoremove.product_Id
      ? { ...product, product_Quantity: producttoremove.product_Quantity }
      : product
  );
};

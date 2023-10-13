import React, { useContext } from "react";
import { ShopContext } from "../../Context/Context";
const Product = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const CartAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt="images" className="images" />
      <div className="description">
        <p>
          <b> {productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="cart" onClick={() => addToCart(id)}>
        {" "}
        Add to cart{CartAmount > 0 && <>({CartAmount}) </>}
      </button>
    </div>
  );
};

export default Product;

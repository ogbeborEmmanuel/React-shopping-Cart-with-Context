import React, { useContext } from "react";
import { ShopContext } from "../../Context/Context";

const CartItem = ({ data }) => {
  const { id, productImage, price, productName } = data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="product">
      <img
        src={productImage}
        alt="product images"
        className="images"
        style={{ width: "30%" }}
      />
      <p>{productName}</p>
      <p>{price}</p>
      <div className="countHandler">
        <button onClick={() => removeFromCart(id)} style={{ width: "20px" }}>
          {" "}
          -{" "}
        </button>
        <input value={cartItems[id]} />
        <button onClick={() => addToCart(id)} style={{ width: "20px" }}>
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
};

export default CartItem;

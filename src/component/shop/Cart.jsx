import React, { useContext } from "react";
import Products from "../Products";
import { ShopContext } from "../../Context/Context";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const Navigate = useNavigate();
  const { cartItems, getTotalPrice } = useContext(ShopContext);
  const TotalPrice = getTotalPrice();
  return (
    <div className="cart">
      <div style={{ textAlign: "center" }}>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {Products.map((pro) => {
          if (cartItems[pro.id] !== 0) {
            return <CartItem key={pro.id} data={pro} />;
          }
        })}
      </div>
      {TotalPrice > 0 ? (
        <div className="checkout">
          <p>SubTotal: ${TotalPrice}</p>
          <button onClick={() => Navigate("/")}>Continue Shopping</button>
        </div>
      ) : (
        <h2 style={{ textAlign: "center", padding: "50px 0" }}>
          {" "}
          OOPS Cart is Empty
        </h2>
      )}
    </div>
  );
};

export default Cart;

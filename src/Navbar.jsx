import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="links">
      <Link to="/"> Home </Link>
      <Link to="/cart">
        <FaShoppingCart size={24} />
      </Link>
    </div>
  );
};

export default Navbar;

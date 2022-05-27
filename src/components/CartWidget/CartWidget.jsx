import "./CartWidget.css";

import { useEffect } from "react";

import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Icons = require("@fortawesome/free-solid-svg-icons");

const CartWidget = () => {
  const { cartItems, updateItems } = useCartContext();

  useEffect(() => {
    updateItems();
  }, [updateItems]);

  return (
    <Link to="/cart">
      <button className="cart">
        <FontAwesomeIcon icon={Icons.faShoppingCart} />
        {cartItems ? (
          <Badge pill bg="success">
            {cartItems}
          </Badge>
        ) : (
          <></>
        )}
      </button>
    </Link>
  );
};

export default CartWidget;

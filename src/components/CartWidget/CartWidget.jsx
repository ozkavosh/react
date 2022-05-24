import "./CartWidget.css";

import { Link } from "react-router-dom"
import { Badge } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
const Icons = require("@fortawesome/free-solid-svg-icons");

const CartWidget = () => {
  const {cartList} = useCartContext();
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    setCantidad(cartList.length);
  }, [cartList.length])

  return (
    <Link to="/cart">
      <button className="cart">
        <FontAwesomeIcon icon={Icons.faShoppingCart} />
        <Badge pill bg="success">
          {cantidad}
        </Badge>
      </button>
    </Link>
  );
};

export default CartWidget;

import "./CartWidget.css";

import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Icons = require("@fortawesome/free-solid-svg-icons");

const CartWidget = () => {
  const { cartList } = useCartContext();
  const totalCartItems = cartList.map(producto => producto.quantity).reduce((acc, item) => acc + item, 0);

  return (
    <Link to="/cart">
      <button className="cart">
        <FontAwesomeIcon icon={Icons.faShoppingCart} />
        {totalCartItems ? (
          <Badge pill bg="success">
            {totalCartItems}
          </Badge>
        ) : (
          <></>
        )}
      </button>
    </Link>
  );
};

export default CartWidget;

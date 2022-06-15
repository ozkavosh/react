import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartContext } from "../../context/CartContext";

import "./CartWidget.css";

const CartWidget = () => {
  const { getCartItemQuantity } = useCartContext();

  return (
    <Link to="/cart">
      <button className="cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        {getCartItemQuantity() ? (
          <Badge pill bg="success">
            {getCartItemQuantity()}
          </Badge>
        ) : (
          <></>
        )}
      </button>
    </Link>
  );
};

export default CartWidget;

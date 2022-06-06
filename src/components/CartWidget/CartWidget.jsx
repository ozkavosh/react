import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartContext } from "../../context/CartContext";

import "./CartWidget.css";

const CartWidget = () => {
  const { cartList } = useCartContext();
  const totalCartItems = cartList.map(product => product.quantity).reduce((acc, item) => acc + item, 0);

  return (
    <Link to="/cart">
      <button className="cart">
        <FontAwesomeIcon icon={faShoppingCart} />
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

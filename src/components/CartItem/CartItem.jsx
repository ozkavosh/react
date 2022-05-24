import "./CartItem.css";

import { useCartContext } from "../../context/CartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Icons = require("@fortawesome/free-solid-svg-icons");

const CartItem = ({ item }) => {
  const {removeItem} = useCartContext();
  return (
    <tr>
      <td>{item.cartId}</td>
      <td>{item.title}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <FontAwesomeIcon
          icon={Icons.faTrash}
          style={{ cursor: "pointer" }}
          onClick={() => removeItem(item.cartId)}
        />
      </td>
    </tr>
  );
};

export default CartItem;

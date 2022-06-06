import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../context/CartContext";

import "./CartItem.css";

const CartItem = ({ item }) => {
  const { removeItem, addToCart } = useCartContext();

  return (
    <tr>
      <td>{item.cartId}</td>
      <td>{item.title}</td>
      <td>${item.price}</td>
      <td>
        <button
          className={"btn btn-dark btnMinus" + (item.quantity > 1 ? "" : " disabled")}
          onClick={() => {addToCart({ ...item, quantity: -1 })}}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <p className="d-md-inline d-block mx-2 mt-2 mt-md-0">{item.quantity}</p>
        <button
          className={"btn btn-dark btnAdd" + (item.quantity < item.stock ? "" : " disabled")}
          onClick={() => {addToCart({ ...item, quantity: 1 })}}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </td>
      <td>
        <FontAwesomeIcon
          icon={faTrash}
          style={{ cursor: "pointer" }}
          onClick={() => {removeItem(item.cartId)}}
        />
      </td>
    </tr>
  );
};

export default CartItem;

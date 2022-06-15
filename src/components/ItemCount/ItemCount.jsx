import { useState } from "react";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../context/CartContext"

import "./ItemCount.css";

const ItemCount = ({ product, initial = 1, setBtnPressed}) => {
  const [count, setCount] = useState(initial);
  const { addToCart } = useCartContext();

  const addItem = () => {
    if (count < product.stock) setCount(count + 1);
  }

  const removeItem = () => {
    if (count > initial) setCount(count - 1);
  }

  return (
    <Row>
      <h5 className="stock">Stock: {product.stock}</h5>
      <div className="countContainer mb-2">
        <button onClick={() => removeItem()} className="minBtn">
          <FontAwesomeIcon icon={faMinusCircle} />
        </button>
        <p className="count bg-secondary">{count}</p>
        <button onClick={() => addItem()} className="addBtn">
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>
      <button
        onClick={() => {setBtnPressed(true); addToCart({...product, quantity: count})}}
        className="btn btn-dark mb-3"
      >
        Agregar al carrito
      </button>
    </Row>
  );
};

export default ItemCount;

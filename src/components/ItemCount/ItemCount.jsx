import "./ItemCount.css";

import { useState } from "react";
import { Row } from "react-bootstrap";

import { useCartContext } from "../../context/CartContext"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Icons = require("@fortawesome/free-solid-svg-icons");

const ItemCount = ({ product, initial = 1, setBtnPressed}) => {
  const [count, setCount] = useState(initial);
  const { addToCart } = useCartContext();

  function addItem() {
    if (count < product.stock) setCount(count + 1);
  }

  function removeItem() {
    if (count > initial) setCount(count - 1);
  }

  return (
    <Row>
      <h5 className="stock">Stock: {product.stock}</h5>
      <div className="countContainer mb-2">
        <button onClick={() => removeItem()} className="minBtn">
          <FontAwesomeIcon icon={Icons.faMinusCircle} />
        </button>
        <p className="count bg-secondary">{count}</p>
        <button onClick={() => addItem()} className="addBtn">
          <FontAwesomeIcon icon={Icons.faPlusCircle} />
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

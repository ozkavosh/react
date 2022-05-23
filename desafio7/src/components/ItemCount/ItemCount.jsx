import { useState } from "react";
import "./ItemCount.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row } from "react-bootstrap";
const Icons = require("@fortawesome/free-solid-svg-icons");

const ItemCount = ({ product, initial = 1, onAdd}) => {
  const [count, setCount] = useState(initial);

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
        onClick={() => onAdd(count, product.title)}
        className="btn btn-dark mb-3"
      >
        Agregar al carrito
      </button>
    </Row>
  );
};

export default ItemCount;

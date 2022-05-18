import { useState } from "react";
import "./ItemCount.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Icons = require("@fortawesome/free-solid-svg-icons");

const ItemCount = ({ product, initial = 1, onAdd, btnPressed }) => {
  const [count, setCount] = useState(initial);

  function addItem() {
    if (count < product.stock && !btnPressed) setCount(count + 1);
  }

  function removeItem() {
    if (count > initial && !btnPressed) setCount(count - 1);
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
      {btnPressed ? (
        <Row className="justify-content-center">
          <Link to="/cart">
            <button className="btn btn-dark mb-1 w-100">Ver carrito</button>
          </Link>
          <Link to="/" className="d-inline">
            <button className="btn btn-dark mb-3 w-100">Seguir comprando</button>
          </Link>
        </Row>
      ) : (
        <button
          onClick={() => onAdd(count, product.title)}
          className="btn btn-dark mb-3"
        >
          Agregar al carrito
        </button>
      )}
    </Row>
  );
};

export default ItemCount;

import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount";

import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const [btnPressed, setBtnPressed] = useState(false);

  return (
    <Row className="justify-content-center bg-light">
      <Col>
        <img src={product.pictureUrl} alt={product.title} />
      </Col>

      <Col className="d-flex flex-column justify-content-center">
        <Row className="justify-content-center">
          <h3>{product.title}</h3>
        </Row>

        <Row className="justify-content-center">
          <h5>${product.price}</h5>
        </Row>

        <Row className="justify-content-center">
          <p>{product.description}</p>
        </Row>

        {btnPressed ? (
          <Row className="justify-content-center">
            <Link to="/cart">
              <button className="btn btn-dark mb-1 w-100">Ver carrito</button>
            </Link>
            <Link to="/" className="d-inline">
              <button className="btn btn-dark mb-3 w-100">
                Seguir comprando
              </button>
            </Link>
          </Row>
        ) : (
          <ItemCount product={product} setBtnPressed={setBtnPressed} />
        )}
      </Col>
    </Row>
  );
};

export default ItemDetail;

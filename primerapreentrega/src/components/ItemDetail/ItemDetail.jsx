import "./ItemDetail.css";
import { Row, Col } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ product }) => {
  return (
    <Row className="justify-content-center bg-light">
      <Col>
        <img src={product.pictureUrl} alt="" />
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

        <ItemCount product={product} />
      </Col>
    </Row>
  );
};

export default ItemDetail;

import "./ItemList.css";

import { Row, Col } from "react-bootstrap";

import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <Row className="justify-content-center">
      {products.map((product) => {
        return (
          <Col key={product.id} className="d-flex flex-grow-0 mb-3">
            <Item product={product} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ItemList;

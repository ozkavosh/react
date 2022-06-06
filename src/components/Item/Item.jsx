import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

import "./Item.css";

const Item = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.pictureUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Link to={`/item/${product.id}`}>
          <Button variant="dark">Ver Detalle del Producto</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;

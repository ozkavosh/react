import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../context/CartContext";
import CartTable from "../CartTable/CartTable";

import "./Cart.css";

const Cart = () => {
  const { cartList } = useCartContext();
  return (
    <Container fluid className="bg-dark" style={{ minHeight: "90vh" }}>
      <Row>
        <h2 className="text-white">Carrito</h2>
      </Row>

      <Row className="bg-light">
        {cartList.length ? (
          <CartTable />
        ) : (
          <>
            <h2 className="mt-3">
              <FontAwesomeIcon icon={faCartPlus} />
            </h2>
            <h3>No hay productos en el carrito!</h3>
            <Link to="/" className="text-decoration-none">
              <h4 className="text-success mb-3">Ver Productos</h4>
            </Link>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Cart;

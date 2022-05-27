import "./Cart.css";

import { Container, Row, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import CartItem from "../CartItem/CartItem";
import { useCartContext } from "../../context/CartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Icons = require("@fortawesome/free-solid-svg-icons");

const Cart = () => {
  const { cartList, clearCart } = useCartContext();

  return (
    <Container fluid className="bg-dark" style={{ minHeight: "90vh" }}>
      <Row>
        <h2 className="text-white">Cart</h2>
      </Row>

      <Row className="bg-light">
        {cartList.length ? (
          <Table striped bordered hover variant="light" className="m-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartList.map((item) => (
                <CartItem item={item} key={item.cartId} />
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  Total: $
                  {cartList
                    .map((item) => item.quantity * item.price)
                    .reduce((sum, item) => sum + item, 0)
                    .toFixed(2)}
                </td>
                <td>
                  <Button
                    variant="dark"
                    className={cartList.length ? "" : "disabled"}
                    onClick={() => {clearCart()}}
                  >
                    Vaciar Carrito
                  </Button>
                </td>
                <td>
                  <Button
                    variant="success"
                    className={cartList.length ? "" : "disabled"}
                  >
                    Finalizar Compra
                  </Button>
                </td>
                <td></td>
                <td></td>
              </tr>
            </tfoot>
          </Table>
        ) : (
          <>
            <h2 className="mt-3"><FontAwesomeIcon icon={Icons.faCartPlus}/></h2>
            <h3>No hay productos en el carrito!</h3>
            <Link to="/" className="text-decoration-none"><h4 className="text-success mb-3">Ver Productos</h4></Link>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Cart;

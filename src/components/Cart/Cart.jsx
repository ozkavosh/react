import "./Cart.css";

import { Container, Row, Table, Button } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";

import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cartList, clearCart } = useCartContext();
  return (
    <Container fluid className="bg-dark" style={{ minHeight: "90vh" }}>
      <Row>
        <h2 className="text-white">Cart</h2>
      </Row>

      <Row>
        <Table striped bordered hover variant="light">
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
              <CartItem item={item} key={item.cartId}/>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total: ${cartList.map(item => item.quantity * item.price).reduce((sum, item) => sum + item, 0).toFixed(2)}</td>
              <td><Button variant="dark" className={cartList.length ? "" : "disabled"} onClick={() => clearCart()}>Vaciar Carrito</Button></td>
              <td><Button variant="success" className={cartList.length ? "" : "disabled"}>Comprar</Button></td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </Table>
      </Row>
    </Container>
  );
};

export default Cart;

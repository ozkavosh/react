import { useState } from 'react';
import { Table, Button } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import CartCheckout from "../CartCheckout/CartCheckout";
import CartItem from "../CartItem/CartItem";

import "./CartTable.css";

const CartTable = () => {
  const { cartList, getCartAmount, clearCart } = useCartContext();
  const [ show, setShow ] = useState(false);

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  return (
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
          <td>Total: ${getCartAmount()}</td>
          <td>
            <Button
              variant="dark"
              className={cartList.length ? "" : "disabled"}
              onClick={() => {
                clearCart();
              }}
            >
              Vaciar Carrito
            </Button>
          </td>
          <td>
            <Button
              variant="success"
              className={cartList.length ? "" : "disabled"}
              onClick={() => {
                handleShow();
              }}
            >
              Finalizar Compra
            </Button>
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
      <CartCheckout show={show} handleHide={handleHide}/>
    </Table>
  );
};

export default CartTable;

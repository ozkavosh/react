import {useState} from 'react';
import Swal from "sweetalert2";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { Modal, Button, Form } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";

import "./CartCheckout.css";

const CartCheckout = ({ show, handleHide, total }) => {
  const { cartList, clearCart } = useCartContext();
  const [ buyerData, setBuyerData ] = useState({ name: '', phone: '', email: '' });

  const handleChange = (e) => {
    setBuyerData({ ...buyerData, [e.target.name]: e.target.value })
  }

  const createOrder = async () => {
    const order = {
      buyer: {
        ...buyerData
      },
      items: cartList.map(({ id, title, price, quantity }) => ({
        id,
        title,
        price: price * quantity,
      })),
      date: new Date(Date.now()).toLocaleString(),
      total,
    };

    console.log(order);

    const db = getFirestore();
    const query = collection(db, "orders");
    const orderRef = await addDoc(query, order);

    Swal.fire({
      title: "Gracias por su compra!",
      text: `Id de su orden: ${orderRef.id}`,
      icon: "success",
      confirmButtonText: "Aceptar"
    });

    clearCart();
  };

  return (
    <Modal show={show} onHide={handleHide}>
      <Modal.Header closeButton>
        <Modal.Title>Finalizar Compra</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre completo"
              onChange={handleChange}
              name="name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingresa tu número de telefono"
              onChange={handleChange}
              name="phone"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu dirección de correo"
              onChange={handleChange}
              name="email"
            />
            <Form.Text className="text-muted">
              Nunca lo compartiremos con nadie.
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={createOrder}>
          Proceder con la compra
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartCheckout;

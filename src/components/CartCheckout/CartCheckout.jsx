import Swal from "sweetalert2";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { Modal, Button, Form } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";

import "./CartCheckout.css";

const CartCheckout = ({ show, handleHide, total }) => {
  const { cartList, clearCart } = useCartContext();

  const createOrder = async () => {
    const name = document.querySelector("#formBasicName").value;
    const phone = document.querySelector("#formBasicPhone").value;
    const email = document.querySelector("#formBasicEmail").value;

    const order = {
      buyer: {
        name,
        phone,
        email,
      },
      items: cartList.map(({ id, title, price, quantity }) => ({
        id,
        title,
        price: price * quantity,
      })),
      date: new Date(Date.now()).toLocaleString(),
      total,
    };

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
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingresa tu número de telefono"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu dirección de correo"
              required
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

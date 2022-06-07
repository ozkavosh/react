import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";

import "./CartCheckout.css";

const CartCheckout = ({ show, handleHide }) => {
  const { sendOrder } = useCartContext();
  const [ buyerData, setBuyerData ] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [ emailVerify, setEmailVerify ] = useState("");
  const [ formError, setFormError ] = useState([false, false, false]);

  const handleChange = (e) => {
    if (e.target.name === "emailVerify") {
      setEmailVerify(e.target.value);
    } else {
      setBuyerData({ ...buyerData, [e.target.name]: e.target.value });
    }
  };

  const createOrder = async () => {
    let errores = [];
    errores.push(buyerData.name ? false : true);
    errores.push(buyerData.phone ? false : true);
    errores.push(buyerData.email && buyerData.email === emailVerify && buyerData.email.includes('@') ? false : true);

    errores.includes(true) ? setFormError(errores) : await sendOrder(buyerData);
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
            { formError[0] ? <Form.Text className="text-danger">
              Este campo no puede quedar vacio!
            </Form.Text> : <></> }
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingresa tu número de telefono"
              onChange={handleChange}
              name="phone"
            />
            { formError[1] ? <Form.Text className="text-danger">
              Este campo no puede quedar vacio!
            </Form.Text> : <></> }
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

          <Form.Group className="mb-3" controlId="formBasicVerifyEmail">
            <Form.Label>Confirma tu correo</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu dirección de correo"
              onChange={handleChange}
              name="emailVerify"
            />
            { formError[2] ? <Form.Text className="text-danger">
              Verifica los correos ingresados!
            </Form.Text> : <></> }
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

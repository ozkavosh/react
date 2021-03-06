import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
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
  const [ formError, setFormError ] = useState([false, false, false, false]);

  const handleChange = (e) => {
    if (e.target.name === "emailVerify") {
      setEmailVerify(e.target.value);
    } else {
      setBuyerData({ ...buyerData, [e.target.name]: e.target.value });
    }
  };

  const handleKeyDown = (e) => {
    !/^[a-zA-Z ]+$/.test(e.key) && e.preventDefault();
  }

  const handleOrderId = async (orderRef) => {
    Swal.fire({
      title: "Gracias por su compra!",
      text: `Id de su orden: ${await orderRef.id}`,
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  }

  const createOrder = async () => {
    let errors = [];
    errors.push(/^[A-Z]?[a-z]+([ ][A-Z]?[a-z]+)*$/.test(buyerData.name) ? false : true);
    errors.push(/^[0-9]+$/.test(buyerData.phone) ? false : true);
    errors.push(/^[a-zA-Z]+[@][a-zA-Z]+[.][a-z]{2,3}$/.test(buyerData.email) ? false : true);
    errors.push(buyerData.email === emailVerify ? false : true);

    errors.includes(true) ? setFormError(errors) : handleOrderId(await sendOrder(buyerData));
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
              onKeyDown={handleKeyDown}
              name="name"
            />
            { formError[0] && <Form.Text className="text-danger">
              Formato de nombre incorrecto o vacio! (Nombre, Nombre Apellido/s, nombre, nombre apellido/s)
            </Form.Text> }
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingresa tu n??mero de telefono"
              onChange={handleChange}
              name="phone"
            />
            { formError[1] && <Form.Text className="text-danger">
              Formato de telefono incorrecto o vacio! (Solo numeros)
            </Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu direcci??n de correo"
              onChange={handleChange}
              name="email"
            />
            { formError[2] && <Form.Text className="text-danger">
              Formato de correo incorrecto o vacio! (correo@dominio.pre)!
            </Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicVerifyEmail">
            <Form.Label>Confirma tu correo</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu direcci??n de correo"
              onChange={handleChange}
              name="emailVerify"
              autoComplete="off"
            />
            { formError[3] && <Form.Text className="text-danger">
              Verifica los correos ingresados!
            </Form.Text>}
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

import "./ItemDetailContainer.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Container, Row } from "react-bootstrap";

import { getFirestore, doc, getDoc } from "firebase/firestore";

import { Ring } from "@uiball/loaders";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ greetings }) => {
  const [prod, setProd] = useState([]);
  const [bool, setBool] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = doc(db, "productos", id);
    getDoc(dbQuery)
      .then((item) =>
        setProd({ ...item.data(), id: item.id })
      )
      .catch((err) => console.log(err))
      .finally(() => {
        setBool(false);
      });
  }, [id]);

  return (
    <Container fluid className="bg-dark" style={{ minHeight: "90vh" }}>
      <Row>
        <h2 className="title text-light p-2">{greetings}</h2>
      </Row>
      <Row className="justify-content-center align-items-center">
        {bool ? (
          <Ring size={40} lineWeight={5} speed={2} color="white" />
        ) : (
          <ItemDetail product={prod}/>
        )}
      </Row>
    </Container>
  );
};

export default ItemDetailContainer;

import "./ItemListContainer.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Row } from "react-bootstrap";

import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { Ring } from "@uiball/loaders";

import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greetings }) => {
  let [productos, setProductos] = useState([]);
  let [bool, setBool] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = categoria
      ? query(collection(db, "productos"), where("category", "==", categoria))
      : collection(db, "productos");

    getDocs(dbQuery)
      .then((resp) =>
        setProductos(resp.docs.map((item) => ({ ...item.data(), id: item.id })))
      )
      .catch((err) => console.log(err))
      .finally(() => {
        setBool(false);
      });
  }, [categoria]);

  return (
    <Container fluid className="bg-secondary" style={{ minHeight: "40vh" }}>
      <Row>
        <h2 className="title text-light p-2">
          {greetings ? greetings.toUpperCase() : categoria.toUpperCase()}
        </h2>
      </Row>
      <Row className="justify-content-center">
        {bool ? (
          <Ring size={40} lineWeight={5} speed={2} color="white" />
        ) : (
          <ItemList products={productos} />
        )}
      </Row>
    </Container>
  );
};

export default ItemListContainer;

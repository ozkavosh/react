import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Ring } from "@uiball/loaders";

import ItemDetail from "../ItemDetail/ItemDetail";

import "./ItemDetailContainer.css";

const ItemDetailContainer = ({ greetings }) => {
  const [product, setProduct] = useState([]);
  const [bool, setBool] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = doc(db, "products", id);
    getDoc(dbQuery)
      .then((item) =>
        setProduct({ ...item.data(), id: item.id })
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
          <ItemDetail product={product}/>
        )}
      </Row>
    </Container>
  );
};

export default ItemDetailContainer;

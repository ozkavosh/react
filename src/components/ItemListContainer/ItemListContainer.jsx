import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

import "./ItemListContainer.css";

const ItemListContainer = ({ greetings }) => {
  let [products, setProducts] = useState([]);
  let [bool, setBool] = useState(true);
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Se hizo una consulta a firebase")
    const db = getFirestore();
    const dbQuery = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));

    getDocs(dbQuery)
      .then((resp) => {
        !resp.docs.length && navigate('/404', {replace: true});
        setProducts(resp.docs.map((item) => ({ ...item.data(), id: item.id })));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setBool(false);
      });
  }, [category, navigate]);

  return (
    <Container fluid className="bg-secondary" style={{ minHeight: "40vh" }}>
      <Row>
        <h2 className="title text-light p-2">
          {greetings ? greetings.toUpperCase() : category.toUpperCase()}
        </h2>
      </Row>
      <Row className="justify-content-center">
        {bool ? (
          <Ring size={40} lineWeight={5} speed={2} color="white" />
        ) : (
          <ItemList products={products} />
        )}
      </Row>
    </Container>
  );
};

export default ItemListContainer;

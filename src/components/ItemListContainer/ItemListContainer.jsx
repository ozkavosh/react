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

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    ;(async ()=>{
      const db = getFirestore();
      const dbQuery = category
        ? query(collection(db, "products"), where("category", "==", category))
        : query(collection(db, "products"));
      
      try{
        const itemsRef = await getDocs(dbQuery);
        !itemsRef.docs.length && navigate('/404', {replace: true});
        setProducts(itemsRef.docs.map((item) => ({ ...item.data(), id: item.id })));
      }catch (err){
        console.error(err.message);
      }finally{
        setLoading(false);
      }
    })();

    return setLoading(true);
  }, [category, navigate]);

  return (
    <Container fluid className="bg-secondary" style={{ minHeight: "100vh" }}>
      <Row>
        <h2 className="title text-light p-2">
          {title ? title.toUpperCase() : category.toUpperCase()}
        </h2>
      </Row>
      <Row className="justify-content-center">
        {loading ? (
          <Ring size={40} lineWeight={5} speed={2} color="white" />
        ) : (
          <ItemList products={products} />
        )}
      </Row>
    </Container>
  );
};

export default ItemListContainer;

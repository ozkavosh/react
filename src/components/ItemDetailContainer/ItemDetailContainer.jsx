import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Ring } from "@uiball/loaders";

import ItemDetail from "../ItemDetail/ItemDetail";

import "./ItemDetailContainer.css";

const ItemDetailContainer = ({ title }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    ;(async () => {
      const db = getFirestore();
      const dbQuery = doc(db, "products", id);

      try{
        const item = await getDoc(dbQuery);
        !item.data() && navigate('/404', { replace: true });
        setProduct({ ...item.data(), id: item.id });
      }catch (err){
        console.error(err.message);
      }finally{
        setLoading(false);
      }
    })();

    return setLoading(true);
  }, [id, navigate]);

  return (
    <Container fluid className="bg-dark" style={{ minHeight: "90vh" }}>
      <Row>
        <h2 className="title text-light p-2">{title}</h2>
      </Row>
      <Row className="justify-content-center align-items-center">
        {loading ? (
          <Ring size={40} lineWeight={5} speed={2} color="white" />
        ) : (
          <ItemDetail product={product} />
        )}
      </Row>
    </Container>
  );
};

export default ItemDetailContainer;

import "./ItemListContainer.css";

import { useEffect, useState } from "react";
import { useParams} from 'react-router-dom'

import { Container, Row} from 'react-bootstrap';

import { Ring } from "@uiball/loaders";

import ItemList from "../ItemList/ItemList";
import getFetch from '../../utils/getFetch';

const ItemListContainer = ({ greetings }) => {
  let [prod, setProd] = useState([]);
  let [bool, setBool] = useState(true);
  const {categoria} = useParams();

  useEffect(() => {
    getFetch()
      .then((productos) => setProd(productos))
      .catch((err) => console.log(err))
      .finally(() => {
        setBool(false)
      });
  }, [prod]);

  return (
    <Container fluid className="bg-secondary" style={{minHeight: "40vh"}}>
      <Row>
        <h2 className="title text-light p-2">{greetings ? greetings.toUpperCase() : categoria.toUpperCase()}</h2>
      </Row>
      <Row className="justify-content-center">
      {bool ? (
        <Ring size={40} lineWeight={5} speed={2} color="white" />
      ) : (
        categoria ? <ItemList products={prod} category={categoria} />
        : <ItemList products={prod} />
      )}
      </Row>
    </Container>
  );
};

export default ItemListContainer;

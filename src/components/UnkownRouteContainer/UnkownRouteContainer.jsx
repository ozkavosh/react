import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import './UnkownRouteContainer.css'

const UnkownRouteContainer = () => {
  return (
    <Container className="unkownRouteContainer text-light">
        <Row className="flex-column">
            <Col className="iconoBug">
                <FontAwesomeIcon icon={faSadTear} />
            </Col>

            <Col>
                <h3>404... Algo salió mal!</h3>
                <h5>No sabemos como llegaste hasta acá</h5>
                <Link to="/" className="btn btn-success"> <h6>Volver al inicio</h6>  </Link>
            </Col>
        </Row>
    </Container>
  )
}

export default UnkownRouteContainer
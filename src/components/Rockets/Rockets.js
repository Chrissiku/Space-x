/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import {
  fetchFormApi,
  reserveRocket,
  CancelReservation,
} from "../../Redux/rockets";

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchFormApi);
    }
  });

  const HandleBookRocket = (id) => dispatch(reserveRocket(id));
  const HandleCancelReservation = (id) => dispatch(CancelReservation(id));

  return (
    <Container className="rockets-container">
      {rockets.map(({
        id, name, description, images, reserved,
      }) => (
        <Row key={id} className="mb-4">
          <Col md={3} xs={12}>
            <Image src={images[0]} thumbnail />
          </Col>
          <Col>
            <h4>{name}</h4>
            <p>
              {reserved && <Badge bg="success">Reserved</Badge>}
              {` ${description}`}
            </p>
            {reserved && (
            <Button
              onClick={() => HandleCancelReservation(id)}
              variant="outline-danger"
            >
              Cancel reservation
            </Button>
            )}
            {!reserved && (
            <Button onClick={() => HandleBookRocket(id)} variant="primary">
              Reserve rocket
            </Button>
            )}
          </Col>
        </Row>
      ))}
    </Container>
  );
};
export default Rockets;

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
import { fetchFormApi } from "../../Redux/rockets";

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchFormApi);
    }
  });
  return (
    <Container>
      {rockets.map(({
        id, name, description, images, reserved,
      }) => (
        <Row key={id} className="mb-4">
          <Col xs={3}>
            <Image src={images[0]} thumbnail />
          </Col>
          <Col>
            <h3>{name}</h3>
            <p>
              {reserved && <Badge bg="info">Reserved</Badge>}
              {description}
            </p>
            {reserved && (
            <Button variant="outline-secondary">Cancel reservation</Button>
            )}
            {!reserved && <Button variant="primary">Reserve rocket</Button>}
          </Col>
        </Row>
      ))}
    </Container>
  );
};
export default Rockets;

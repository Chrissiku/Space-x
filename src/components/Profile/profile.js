/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import {
  Container, Row, ListGroup, Col,
} from "react-bootstrap";
import { useSelector } from "react-redux";
// import { Row } from "react-bootstrap/Row";

const Profile = () => {
  const profileParts = useSelector((state) => [
    {
      SectionTitle: "Missions",
      data: state.missions.filter((mission) => mission.reserved),
    },
    {
      SectionTitle: "Rockets",
      data: state.rockets.filter((rocket) => rocket.reserved),
    },
  ]);
  return (
    <>
      <Container fluid="true" className="profile-container">
        <Row>
          {profileParts.map(({ SectionTitle, data }) => (
            <Col md={6} xs={12} key={SectionTitle}>
              <h4>
                My
                {' '}
                {SectionTitle}
              </h4>
              <ListGroup>
                {data.length > 0
                  ? data.map((item) => (
                    <ListGroup.Item key={item.id} action variant="secondary">{item.name}</ListGroup.Item>
                  )) : (
                    <ListGroup.Item variant="danger">
                      No
                      {' '}
                      {SectionTitle}
                      {' '}
                      Selected
                    </ListGroup.Item>
                  )}
              </ListGroup>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Profile;

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
      SectionTitle: "My Missions",
      data: state.missions.filter((mission) => mission.reserved),
    },
    {
      SectionTitle: "My Rockets",
      data: state.rockets.filter((rocket) => rocket.reserved),
    },
  ]);
  return (
    <>
      <Container className="profile-container">
        <Row>
          {profileParts.map(({ SectionTitle, data }) => (
            <Col key={SectionTitle}>
              <h4>{SectionTitle}</h4>
              <ListGroup>
                {data.map((item) => (
                  <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Profile;

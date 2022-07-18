/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import { ListGroup, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { Row } from "react-bootstrap/Row";

const Profile = () => {
  const profileParts = useSelector((state) => [
    {
      RocketTitle: "My Rockets",
      data: state.rockets.filter((rocket) => rocket.reserved),
    },
  ]);
  return (
    <>
      {profileParts.map(({ RocketTitle, data }) => (
        <Col key={RocketTitle}>
          <h4>{RocketTitle}</h4>
          <ListGroup>
            {data.map((item) => (
              <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      ))}
    </>
  );
};

export default Profile;
